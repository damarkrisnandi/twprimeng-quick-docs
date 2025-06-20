import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GlobalStateManagementStore } from '../../stores/global-state-management.store';

@Component({
  selector: 'app-global-state-management-demo',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div class="p-4">
      <h2>Global State Management Demo</h2>
      <p>This component demonstrates global state management in Angular.</p>
      <div class="flex flex-col gap-2 p-2">
        <p class="text-2xl">Count: {{ globalStore.count() }}</p>
      </div>
      <div class="flex flex-col gap-2 p-2">
        <p class="text-2xl">Non Negative: {{ globalStore.alwaysPositive() }}</p>
      </div>
    <div class="flex gap-2">
      <p-button icon="pi pi-plus"  (onClick)="globalStore.increment()"></p-button>
      <p-button icon="pi pi-minus"  (onClick)="globalStore.decrement()"></p-button>
      <p-button icon="pi pi-refresh" (onClick)="globalStore.reset()"></p-button>
    </div>
    </div>
  `,
  styles: ``
})
export class GlobalStateManagementDemoComponent {
  globalStore = inject(GlobalStateManagementStore);
  handlePlus() {
    this.globalStore.increment();
  }
  handleMinus() {
    this.globalStore.decrement();
  }
}
