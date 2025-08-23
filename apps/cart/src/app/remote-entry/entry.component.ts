import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@micro-frontend/auth';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-cart-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    this.authService.isUserLoggedIn$.subscribe((loggedIn) => {
      console.log('Cart loggedIn', loggedIn);
      if (!loggedIn) {
        this.router.navigateByUrl('login');
      }
    });
  }
}
