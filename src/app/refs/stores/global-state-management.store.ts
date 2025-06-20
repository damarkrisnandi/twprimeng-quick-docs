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
