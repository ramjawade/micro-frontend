import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService, ThemeSettings } from '../../services/theme.service';

@Component({
  selector: 'app-theme-controls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './theme-controls.component.html',
  styleUrls: ['./theme-controls.component.scss']
})
export class ThemeControlsComponent implements OnInit {
  themeSettings: ThemeSettings;

  constructor(private themeService: ThemeService) {
    // Initialize with default values
    this.themeSettings = {
      primaryColor: '#0d6efd',
      secondaryColor: '#6c757d',
      successColor: '#198754',
      infoColor: '#0dcaf0',
      warningColor: '#ffc107',
      dangerColor: '#dc3545',
      lightColor: '#f8f9fa',
      darkColor: '#212529',
      fontSize: 16,
      lineHeight: 1.5,
      fontWeightNormal: 400,
      fontWeightBold: 700,
      borderWidth: 1,
      borderRadius: 6,
      borderRadiusSm: 4,
      borderRadiusLg: 8,
      spacer: 16,
      boxShadow: 0.125,
      boxShadowLg: 1,
      transition: 0.15,
      transitionTiming: 'ease-in-out'
    };
  }

  ngOnInit(): void {
    this.themeService.themeSettings$.subscribe(settings => {
      this.themeSettings = settings;
    });
  }

  updateColor(key: keyof ThemeSettings, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.themeService.updateSetting(key, value);
  }

  updateSetting(key: keyof ThemeSettings, value: any): void {
    this.themeService.updateSetting(key, value);
  }

  // Event handler methods to avoid template casting issues
  onInputChange(key: keyof ThemeSettings, event: Event): void {
    const value = +(event.target as HTMLInputElement).value;
    this.updateSetting(key, value);
  }

  onSelectChange(key: keyof ThemeSettings, event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (key === 'fontWeightNormal' || key === 'fontWeightBold') {
      this.updateSetting(key, +value);
    } else {
      this.updateSetting(key, value);
    }
  }

  resetTheme(): void {
    this.themeService.resetTheme();
  }

  exportCSS(): void {
    const css = this.themeService.exportCSS();
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bootstrap-theme.css';
    a.click();
    URL.revokeObjectURL(url);
  }
}
