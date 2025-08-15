import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ComponentPreviewComponent } from './components/component-preview/component-preview.component';
import { ThemeControlsComponent } from './components/theme-controls/theme-controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    ComponentPreviewComponent,
    ThemeControlsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeComponent = 'all';

  onComponentSelected(componentId: string): void {
    this.activeComponent = componentId;
  }
}
