import { Component, inject, Input } from '@angular/core';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel'

@Component({
  selector: 'app-categorized-menu',
  standalone: true,
  imports: [SubMenuComponent, ScrollPanelModule],
  template: `
  <div class="flex">
    <aside class="h-screen p-2 hidden md:flex flex-col shadow-lg sticky top-0 bg-gray-50 dark:bg-gray-800 layout-menu-container border-r border-gray-300 dark:border-gray-700">
        <p-scrollPanel #layoutMenuScroller [style]="{ width: '100%', height: '80vh' }">
          <div class="menu-scroll-content layout-menu layout-main-menu">
            <ul
              app-submenu
              [item]="items"
              [root]="true"
              class="layout-menu layout-main-menu clearfix w-full md:w-80"
              [reset]="reset"
              [visible]="true"
              [parentActive]="true"
            ></ul>

          </div>
        </p-scrollPanel>
    </aside>
    <div class="w-[5/12] h-full bg-gray-200 dark:bg-gray-700"></div>
  </div>
  `,
  styles: `
  :host ::ng-deep {
      .topbar .topbar-right #menu-button {
      width: 24px;
      height: 24px;
      /* left: 284px; */
      margin-top: 5px;
    }

    .topbar .topbar-right #menu-button i {
      font-size: 24px;
    }

    .layout-menu {

      li a {
        display: block;
        // padding: 0.2rem;
      }

      li a.more-menu {
        padding-top: 20px;
        padding-left: 20px;
        padding-bottom: 10px;
        padding-right: 70px;
        cursor: pointer;
        font-size: 14px;
      }

      li a i.menuitem-toggle-icon {
        // font-size: 12px;
      }

      li a span {
        display: contents;
      }

      li a i:first-child {
        margin-right: 5px;
        // font-size: 12px;
      }

      li ul li a {
        padding-left: 20px;
      }

      li ul li a i:first-child {
        margin-right: 5px;
        // font-size: 12px;
      }

      li ul li ul li a {
        padding-left: 40px;
      }

      li ul li ul li ul li a {
        padding-left: 60px;
      }

      &.layout-wrapper.menu-layout-static.layout-menu-static-inactive
        .layout-menu-container {
        margin-left: -305px;
      }
    }

  }

  `
})
export class CategorizedMenuComponent {
    @Input() items: MenuItem[] = [];
    @Input() reset: boolean = false;

    router = inject(Router);

    ngOnInit(): void {
      this.items = [
        {
          label: 'Category 1',
          icon: 'pi pi-list',
          items: [
            {
              label: 'Path 1',
              icon: 'pi pi-list',
              routerLink: '/'
            },
            {
              label: 'Path 2',
              icon: 'pi pi-list',
              routerLink: '/'
            }
          ]
        },
        {
          label: 'Category 2',
          icon: 'pi pi-list',
          items: [
            {
              label: 'Sub-Category 1',
              icon: 'pi pi-list',
              items: [
                {
                  label: 'Sub-sub-Category 1',
                  icon: 'pi pi-list',
                  items: [
                    {
                      label: 'Path 1',
                      icon: 'pi pi-list',
                      routerLink: '/'
                    },
                    {
                      label: 'Path 2',
                      icon: 'pi pi-list',
                      routerLink: '/'
                    }
                  ]
                },
                {
                  label: 'Path 1',
                  icon: 'pi pi-list',
                  routerLink: '/'
                },
                {
                  label: 'Path 2',
                  icon: 'pi pi-list',
                  routerLink: '/'
                }
              ]
            },
            {
              label: 'Sub-Category 2',
              icon: 'pi pi-list',
              items: [
                {
                  label: 'Path 1',
                  icon: 'pi pi-list',
                  routerLink: '/'
                },
                {
                  label: 'Path 2',
                  icon: 'pi pi-list',
                  routerLink: '/'
                }
              ]
            },
            {
              label: 'Path 1',
              icon: 'pi pi-list',
              routerLink: '/'
            },
            {
              label: 'Path 2',
              icon: 'pi pi-list',
              routerLink: '/'
            }
          ]
        }
      ]
    }

    home() {
      this.router.navigate(['/']);
    }
}
