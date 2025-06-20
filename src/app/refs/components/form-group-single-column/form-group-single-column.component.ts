import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-form-group-single-column',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputGroupModule, InputGroupAddonModule, ButtonModule, InputNumberModule, InputTextModule, SelectModule, DatePickerModule],
  template: `
    <div class="grid gap-2" [formGroup]="inputAccountForm">
      <div class="grid grid-cols-12">
        <div class="col-span-12 grid gap-2">
          <!-- Account Number -->
          <div class="grid grid-cols-12 items-center gap-2">
            <div class="col-span-12 md:col-span-3">
              <label for="txt-account-number-input-account">Account Number</label>
            </div>

            <div class="col-span-12 md:col-span-9">

              <p-inputgroup>
                <input id="txt-account-number-input-account" type="text" pInputText formControlName="accountNumber"
                  class="w-full" readonly />
                  <p-inputgroup-addon>
                      <p-button icon="pi pi-search" class="w-full !h-full"
                      id="btn-search-account-number-input-account" (onClick)="onLookupAccount()"></p-button>
                  </p-inputgroup-addon>

              </p-inputgroup>
            </div>
          </div>

          <!-- Description -->
          <div class="grid grid-cols-12 items-center gap-2">
            <div class="col-span-12 md:col-span-3">
              <label for="txt-description-input-account">Description</label>
            </div>

            <div class="col-span-12 md:col-span-9">
              <input id="txt-description-input-account" type="text" pInputText formControlName="description"
                class="w-full" />
            </div>
          </div>

          <!-- Amount -->
          <div class="grid grid-cols-12 items-center gap-2">
            <div class="col-span-12 md:col-span-3">
              <label for="txt-amount-input-account">Amount</label>
            </div>

            <div class="col-span-12 md:col-span-9">
              <p-inputNumber inputId="txt-amount-input-account" formControlName="amount" class="w-full" mode="decimal" locale="de-DE" [min]="0"></p-inputNumber>
            </div>
          </div>

          <!-- Category -->
          <div class="grid grid-cols-12 items-center gap-2">
            <div class="col-span-12 md:col-span-3">
              <label for="select-category-input-account">Category</label>
            </div>

            <div class="col-span-12 md:col-span-9">
              <p-select inputId="select-category-input-account" [options]="categories" formControlName="category"  placeholder="Select Category" class="w-full md:w-56" />
            </div>
          </div>

          <!-- Due Date -->
          <div class="grid grid-cols-12 items-center gap-2">
            <div class="col-span-12 md:col-span-3">
              <label for="cal-duedate-input-account">Due Date</label>
            </div>

            <div class="col-span-12 md:col-span-9">
              <p-datepicker inputId="cal-duedate-input-account" formControlName="dueDate" />

            </div>
          </div>
        </div>

      </div>
    </div>

  `,
  styles: ``
})
export class FormGroupSingleColumnComponent {
  inputAccountForm = new FormGroup({
    id: new FormControl<number | null>({ value: null, disabled: false }),
    accountNumber: new FormControl({ value: '', disabled: false }, Validators.required),
    description: new FormControl({ value: '', disabled: false }, Validators.required),
    amount: new FormControl<number | null>({ value: 0, disabled: false }, Validators.required),
    category: new FormControl({ value: '', disabled: false }, Validators.required),
    dueDate: new FormControl<Date | null>({ value: null, disabled: false }, Validators.required),
  })

  categories = [
    { label: 'Category 1', value: '1' },
    { label: 'Category 2', value: '2' },
    { label: 'Category 3', value: '3' },
  ]

  selectedCategory: string | null = null;

  onLookupAccount() { }
}
