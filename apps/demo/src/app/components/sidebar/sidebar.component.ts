import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ComponentNavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() componentSelected = new EventEmitter<string>();
  
  activeComponent = 'all';
  mobileExpanded = true;
  isMobile = false;

  navItems: ComponentNavItem[] = [
    { id: 'all', label: 'All Components', icon: 'bi-grid-3x3-gap' },
    { id: 'navigation', label: 'Navigation', icon: 'bi-list' },
    { id: 'buttons', label: 'Buttons', icon: 'bi-circle-square' },
    { id: 'forms', label: 'Forms', icon: 'bi-input-cursor' },
    { id: 'alerts', label: 'Alerts', icon: 'bi-exclamation-triangle' },
    { id: 'cards', label: 'Cards', icon: 'bi-card-text' },
    { id: 'progress', label: 'Progress & Badges', icon: 'bi-bar-chart' },
    { id: 'lists', label: 'List Groups', icon: 'bi-list-ul' },
    { id: 'tables', label: 'Tables', icon: 'bi-table' },
    { id: 'interactive', label: 'Interactive', icon: 'bi-gear' }
  ];

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 992;
    if (!this.isMobile) {
      this.mobileExpanded = true;
    }
  }

  selectComponent(componentId: string): void {
    this.activeComponent = componentId;
    this.componentSelected.emit(componentId);
  }

  toggleMobile(): void {
    this.mobileExpanded = !this.mobileExpanded;
  }
}
