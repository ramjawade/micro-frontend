import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';

@Component({
  standalone: true,
  imports: [CommonModule, LoginComponent],
  selector: 'app-login-entry',
  template: `<app-login></app-login>`,
})
export class RemoteEntryComponent {}
