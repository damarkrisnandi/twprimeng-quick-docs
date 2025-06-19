import { Component } from '@angular/core';

@Component({
  selector: 'app-two-columns',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full">
      <div class="grid grid-cols-12 md:gap-12">
        <!-- First Column -->
        <div class="col-span-12 md:col-span-6 grid gap-2">
          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>

          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>

          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>

          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>

          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>
        </div>

        <!-- Second Column -->
        <div class="col-span-12 md:col-span-6 grid gap-2">
          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>

          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>

          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>

          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>

          <div class="grid grid-cols-12 items-center gap-2">
            <div class="h-20 col-span-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class TwoColumnsComponent {

}
