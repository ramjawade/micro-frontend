import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '@micro-frontend/shared';
@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
  sidebarOpen = true;
  user!: any;
  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
    console.log('User:', this.user);
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
