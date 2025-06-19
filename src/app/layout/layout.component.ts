import { Component } from '@angular/core';
import { TopbarComponent } from '../components/topbar/topbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent],
  template: `
  <div class="flex flex-col h-full gap-4">
    <div class="sticky top-0 z-50">
      <app-topbar></app-topbar>
    </div>
    <div class="layout-content p-4">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: `
  layout-content {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    background-color: var(--surface-0);
    color: var(--text-color);
  }
  `
})
export class LayoutComponent {

}
