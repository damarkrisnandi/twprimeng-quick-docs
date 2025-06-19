import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

const space = 3;
const spaceSm = 2;

export const breakpoints = {
  '768px': { width: `calc(100% - ${space * 2}px)`, right: `${space}px`, left: `${space}px` },
  '600px': { width: `calc(100% - ${spaceSm * 2}px)`, right: `${spaceSm}px`, left: `${spaceSm}px` }
};


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputGroupAddonModule,
    ToastModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    MessageService,
  ],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
    password: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
  });

  breakpoints = { ...breakpoints };



  constructor(
    private messageService: MessageService,
    private router: Router,

  ) {

  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((value: any) => {
      //  set value from form
    });
  }

  login() {
    // set login action
  }

}
