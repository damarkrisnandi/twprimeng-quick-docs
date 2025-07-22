import { Doc } from "../../models/docs.model";
import { LoginComponent } from "../components/login/login.component";

export const loginComponentData: Doc  = {
  component: LoginComponent,
  header: 'Login Component',
  files: [
    {
      name: 'login.component.html',
      type: 'html',
      content: `
<div class="h-screen flex flex-col justify-center items-center background-layout" [formGroup]="loginForm">
  <div class="w-11/12 md:w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Login to your account
        </h1>
      </div>
      <div class="space-y-4 md:space-y-6" action="#">
        <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input pInputText
            type="email"
            formControlName="username"
            name="username"
            id="email"
            (keyup.enter)="login()"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="">
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <p-password formControlName="password"
            (keyup.enter)="login()"
            [toggleMask]="true"
            styleClass="w-full"
            inputStyleClass="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block !w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div class="flex items-center justify-between">
            <!-- <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
            </div> -->
            <button (click)="login()" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</button>
        </div>
        <button type="submit" (click)="login()" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
        </p>
    </div>
  </div>
</div>

</div>
`,
    },
    {
      name: 'login.component.ts',
      type: 'ts',
      content: `
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
  '768px': { width: \`calc(100% - \${space * 2}px)\`, right: \`\${space}px\`, left: \`\${space}px\` },
  '600px': { width: \`calc(100% - \${spaceSm * 2}px)\`, right: \`\${spaceSm}px\`, left: \`\${spaceSm}px\` }
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
          `
    },
    {
      name: 'login.component.scss',
      type: 'scss',
      content: `
:host ::ng-deep .p-card-body {
  background-color: rgb(255, 255, 255);
  border-radius: 5px;

  .p-card-title {
    padding: 1.5em;
    // color: white;
  }
}

.background-layout {
  // background-image: url('<url-image>');
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center;
  background-color: gray;
  height: 100vh;
}

:host ::ng-deep .p-password-overlay {
  display: none;
}

      `
    }
  ]

}
