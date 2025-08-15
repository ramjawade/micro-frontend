import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ThemeSettings {
  // Colors
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  dangerColor: string;
  lightColor: string;
  darkColor: string;
  
  // Typography
  fontSize: number;
  lineHeight: number;
  fontWeightNormal: number;
  fontWeightBold: number;
  
  // Spacing & Borders
  borderWidth: number;
  borderRadius: number;
  borderRadiusSm: number;
  borderRadiusLg: number;
  spacer: number;
  
  // Shadows
  boxShadow: number;
  boxShadowLg: number;
  
  // Transitions
  transition: number;
  transitionTiming: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSettings = new BehaviorSubject<ThemeSettings>({
    // Default Bootstrap 5.3.2 values
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
  });

  themeSettings$ = this.themeSettings.asObservable();

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    this.updateTheme();
  }

  updateTheme(): void {
    const settings = this.themeSettings.value;
    const root = document.documentElement;

    // Update CSS custom properties
    root.style.setProperty('--bs-primary', settings.primaryColor);
    root.style.setProperty('--bs-secondary', settings.secondaryColor);
    root.style.setProperty('--bs-success', settings.successColor);
    root.style.setProperty('--bs-info', settings.infoColor);
    root.style.setProperty('--bs-warning', settings.warningColor);
    root.style.setProperty('--bs-danger', settings.dangerColor);
    root.style.setProperty('--bs-light', settings.lightColor);
    root.style.setProperty('--bs-dark', settings.darkColor);

    // Convert hex colors to RGB for transparency support
    root.style.setProperty('--bs-primary-rgb', this.hexToRgb(settings.primaryColor));
    root.style.setProperty('--bs-secondary-rgb', this.hexToRgb(settings.secondaryColor));
    root.style.setProperty('--bs-success-rgb', this.hexToRgb(settings.successColor));
    root.style.setProperty('--bs-info-rgb', this.hexToRgb(settings.infoColor));
    root.style.setProperty('--bs-warning-rgb', this.hexToRgb(settings.warningColor));
    root.style.setProperty('--bs-danger-rgb', this.hexToRgb(settings.dangerColor));
    root.style.setProperty('--bs-light-rgb', this.hexToRgb(settings.lightColor));
    root.style.setProperty('--bs-dark-rgb', this.hexToRgb(settings.darkColor));

    root.style.setProperty('--bs-font-size-base', settings.fontSize + 'px');
    root.style.setProperty('--bs-line-height-base', settings.lineHeight.toString());
    root.style.setProperty('--bs-font-weight-normal', settings.fontWeightNormal.toString());
    root.style.setProperty('--bs-font-weight-bold', settings.fontWeightBold.toString());

    root.style.setProperty('--bs-border-width', settings.borderWidth + 'px');
    root.style.setProperty('--bs-border-radius', settings.borderRadius + 'px');
    root.style.setProperty('--bs-border-radius-sm', settings.borderRadiusSm + 'px');
    root.style.setProperty('--bs-border-radius-lg', settings.borderRadiusLg + 'px');
    root.style.setProperty('--bs-spacer', settings.spacer + 'px');

    const shadowValue = settings.boxShadow + 'rem';
    const shadowLgValue = settings.boxShadowLg + 'rem';
    root.style.setProperty('--bs-box-shadow', `0 ${shadowValue} ${(parseFloat(shadowValue) * 2)}rem rgba(0, 0, 0, 0.075)`);
    root.style.setProperty('--bs-box-shadow-lg', `0 ${shadowLgValue} ${(parseFloat(shadowLgValue) * 3)}rem rgba(0, 0, 0, 0.175)`);

    const transitionValue = settings.transition + 's';
    root.style.setProperty('--bs-transition', `all ${transitionValue} ${settings.transitionTiming}`);
    root.style.setProperty('--bs-transition-base', `all ${transitionValue} ${settings.transitionTiming}`);

    // Force CSS variable updates
    document.body.classList.add('theme-updating');
    setTimeout(() => {
      document.body.classList.remove('theme-updating');
    }, 10);
  }

  private hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0';
  }

  updateSetting(key: keyof ThemeSettings, value: any): void {
    const current = this.themeSettings.value;
    this.themeSettings.next({ ...current, [key]: value });
    this.updateTheme();
  }

  resetTheme(): void {
    const defaultSettings: ThemeSettings = {
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

    this.themeSettings.next(defaultSettings);
    this.updateTheme();
  }

  exportCSS(): string {
    const settings = this.themeSettings.value;
    return `:root {
  --bs-primary: ${settings.primaryColor};
  --bs-secondary: ${settings.secondaryColor};
  --bs-success: ${settings.successColor};
  --bs-info: ${settings.infoColor};
  --bs-warning: ${settings.warningColor};
  --bs-danger: ${settings.dangerColor};
  --bs-light: ${settings.lightColor};
  --bs-dark: ${settings.darkColor};
  --bs-font-size-base: ${settings.fontSize}px;
  --bs-line-height-base: ${settings.lineHeight};
  --bs-font-weight-normal: ${settings.fontWeightNormal};
  --bs-font-weight-bold: ${settings.fontWeightBold};
  --bs-border-width: ${settings.borderWidth}px;
  --bs-border-radius: ${settings.borderRadius}px;
  --bs-border-radius-sm: ${settings.borderRadiusSm}px;
  --bs-border-radius-lg: ${settings.borderRadiusLg}px;
  --bs-spacer: ${settings.spacer}px;
  --bs-box-shadow: 0 ${settings.boxShadow}rem ${(settings.boxShadow * 2)}rem rgba(0, 0, 0, 0.075);
  --bs-box-shadow-lg: 0 ${settings.boxShadowLg}rem ${(settings.boxShadowLg * 3)}rem rgba(0, 0, 0, 0.175);
  --bs-transition: all ${settings.transition}s ${settings.transitionTiming};
}`;
  }
}
