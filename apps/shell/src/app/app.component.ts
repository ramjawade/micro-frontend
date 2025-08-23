import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@micro-frontend/auth';
import { distinctUntilChanged } from 'rxjs';

@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = 'shell';
  sidebarOpen = true;
  private router = inject(Router);
  private authService = inject(AuthService);
  isLoggedIn$ = this.authService.isUserLoggedIn$;

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl('login');
          } else {
            this.router.navigateByUrl('');
          }
        });
      });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    this.authService.logout();
  }
}
