import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-preview.component.html',
  styleUrls: ['./component-preview.component.scss']
})
export class ComponentPreviewComponent {
  @Input() activeComponent: string = 'all';

  components = [
    { id: 'navigation', label: 'Navigation' },
    { id: 'buttons', label: 'Buttons & Button Groups' },
    { id: 'forms', label: 'Form Controls' },
    { id: 'alerts', label: 'Alerts' },
    { id: 'cards', label: 'Cards' },
    { id: 'progress', label: 'Progress & Badges' },
    { id: 'lists', label: 'List Groups' },
    { id: 'tables', label: 'Tables' },
    { id: 'interactive', label: 'Interactive Components' }
  ];

  get visibleComponents() {
    return this.components;
  }

  isComponentVisible(componentId: string): boolean {
    return this.activeComponent === 'all' || this.activeComponent === componentId;
  }

  getCurrentComponentLabel(): string {
    if (this.activeComponent === 'all') {
      return 'All Components';
    }
    const component = this.components.find(c => c.id === this.activeComponent);
    return component ? component.label : 'All Components';
  }
}
