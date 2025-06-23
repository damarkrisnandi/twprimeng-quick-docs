import { Doc } from "../../models/docs.model";
import { GlobalStateManagementDemoComponent } from "../components/global-state-management-demo/global-state-management-demo.component";

export const globalStateManagementData: Doc = {
  header: 'Global State Management',
  component: GlobalStateManagementDemoComponent,
  files: [
    {
      name: 'global-state-management.store.ts',
      type: 'ts',
      content: `
import { computed, Injectable, signal } from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class GlobalStateManagementStore {
  private readonly state = {
    count: signal<number>(0)
  }

  public readonly alwaysPositive = computed(() => {
    if (this.state.count() < 0) {
      return 0;
    }
    return this.state.count();
  })

  public readonly count = this.state.count.asReadonly();

  public increment() {
    this.state.count.update(value => value + 1);
  }

  public decrement() {
    this.state.count.update(value => value - 1);
  }

  public reset() {
    this.state.count.set(0);
  }
}

      `
    },
    {
      name: 'global-state-management-demo.component.ts',
      type: 'ts',
      content: `
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GlobalStateManagementStore } from '../../stores/global-state-management.store';

@Component({
  selector: 'app-global-state-management-demo',
  standalone: true,
  imports: [ButtonModule],
  template: \`
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
  \`,
  styles: \`\`
})
export class GlobalStateManagementDemoComponent {
  globalStore = inject(GlobalStateManagementStore);
}

      `
    }
  ]
}
