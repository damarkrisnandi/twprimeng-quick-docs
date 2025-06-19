import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  /* tslint:disable:component-selector */
  selector: '[app-submenu]',
  /* tslint:enable:component-selector */
  standalone: true,
  template: `
    @for (child of item; track $index) {
      <li
        [ngClass]="{ 'active-menuitem': isActive($index) }"
        *ngIf="!visible ? false : true"
      >


        @if (child.routerLink) {
          <a
          (click)="itemClick($event, child, $index)"
          (mouseenter)="onMouseEnter($index)"
          class="ripplelink hover:bg-primary-100 py-3 px-2"
          [ngClass]="{ 'bg-primary-200 text-black': isActive($index) }"
          [routerLink]="child.routerLink"
          routerLinkActive="active-menuitem-routerlink"
          [queryParams]="child.queryParams"
          [routerLinkActiveOptions]="{ exact: true }"
          [attr.tabindex]="!visible ? '-1' : null"
          [attr.target]="child.target"
        >
          <div class="w-full flex justify-between items-center">
            <div>
              <i [ngClass]="child.icon" class="text-primary"></i><span>{{ child.label }}</span>
            </div>
            <i
              class="menuitem-toggle-icon"
              [ngClass]="{
                'pi pi-angle-up': isActive($index),
                'pi pi-angle-down': !isActive($index)
              }"
              *ngIf="child.items">
            </i>
          </div>
        </a>
        } @else {
          <a
          [href]="child.url || '#'"
          (click)="itemClick($event, child, $index)"
          (mouseenter)="onMouseEnter($index)"
          class="ripplelink hover:bg-primary-100 w-full font-bold py-3 px-2"
          [ngClass]="{ 'bg-primary-200 text-black': isActive($index) }"
          [attr.tabindex]="!visible ? '-1' : null"
          [attr.target]="child.target"
        >
        <div class="w-full flex justify-between items-center">
          <div>
            <i [ngClass]="child.icon" class="text-primary"></i><span>{{ child.label }}</span>
          </div>
          <i
            class="pi menuitem-toggle-icon"
            [ngClass]="{
              'pi-angle-up': isActive($index),
              'pi-angle-down': !isActive($index)
            }"
            *ngIf="child.items">
          </i>
        </div>
        </a>
        }

        <ul
          app-submenu
          [item]="child.items"
          [visible]="isActive($index)"
          [reset]="reset"
          [parentActive]="isActive($index)"
          [@children]="
             root
              ? isActive($index)
                ? 'visible'
                : 'hidden'
              : isActive($index)
              ? 'visibleAnimated'
              : 'hiddenAnimated'
          "
        ></ul>
      </li>

  }


  `,
  imports: [
    CommonModule,
    RouterModule,
  ],
  animations: [
    trigger('children', [
      state(
        'hiddenAnimated',
        style({
          height: '0px',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      state(
        'visible',
        style({
          display: 'block',
        })
      ),
      state(
        'hidden',
        style({
          display: 'none',
        })
      ),
      transition('visibleAnimated => hiddenAnimated', animate('200ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('200ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class SubMenuComponent {
  @Input() item: MenuItem[] | MenuItem | any;

  @Input() root: boolean = false;

  @Input() visible: boolean = false;

  _reset: boolean = false;

  _parentActive: boolean = false;

  activeIndex: number | null = null;

  constructor() {}

  itemClick(event: Event, item: MenuItem, index: number): any {
    if (this.root) {
      // this.app.menuHoverActive = !this.app.menuHoverActive;
    }

    // avoid processing disabled items
    if (item.disabled) {
      event.preventDefault();
      return true;
    }

    // setTimeout(() => {
      // activate current item and deactivate active sibling if any
      this.activeIndex = this.activeIndex === index ? null : index;
    // }, 700)


    // execute command
    if (item.command) {
      item.command({ originalEvent: event, item });
    }

    // prevent hash change
    if (item.items || (!item.url && !item.routerLink)) {
      setTimeout(() => {
        // this.app.layoutMenuScrollerViewChild?.moveBar();
      }, 450);
      event.preventDefault();
    }

    // hide menu
    if (!item.items) {
      // if (this.app.isHorizontal() || this.app.isSlim()) {
      //   this.app.resetMenu = true;
      // } else {
      //   this.app.resetMenu = false;
      // }

      // this.app.overlayMenuActive = false;
      // this.app.staticMenuMobileActive = false;
      // this.app.menuHoverActive = !this.app.menuHoverActive;
    }

    // if (item.routerLink) {
    //   let menuLabel = new LabelValue(item.label,item.routerLink[0]);
    //   this.switchTopbarIcon.setMenu(menuLabel);
    // }

    // return true;
  }

  onMouseEnter(index: number) {
    if (this.root) {
      this.activeIndex = index;
    }
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

  @Input() get reset(): boolean {
    return this._reset;
  }

  set reset(val: boolean) {
    this._reset = val;

    if (this._reset) {
      this.activeIndex = null;
    }
  }

  @Input() get parentActive(): boolean {
    return this._parentActive;
  }

  set parentActive(val: boolean) {
    this._parentActive = val;

    if (!this._parentActive) {
      this.activeIndex = null;
    }
  }
}
