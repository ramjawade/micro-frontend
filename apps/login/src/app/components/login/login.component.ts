import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@micro-frontend/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);

  constructor() {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.checkCredentials(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/');
        }
      });
      this.loginForm.reset({
        email: '',
        password: '',
        rememberMe: false,
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  // Helper method to check if a field is invalid and touched
  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  // Helper method to get error message for a field
  getFieldError(fieldName: string): string {
    const field = this.loginForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) {
        return `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return 'Password must be at least 6 characters long';
      }
    }
    return '';
  }
}
