import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  btnPaddingY = 0.5; // Default vertical padding
  btnPaddingX = 1; // Default horizontal padding
  btnFontFamily = 'Arial, sans-serif'; // Default font family
  fontFamilies = [
    'Arial, sans-serif',
    'Courier New, monospace',
    'Georgia, serif',
    'Times New Roman, serif',
    'Verdana, sans-serif',
  ];

  // Line Height
  btnLineHeight = 1.5; // Default line height
  btnColor = '#000000'; // Default text color
  btnBg = '#ffffff'; // Default background color
  btnBorderWidth = 0; // Default border width in px
  btnBorderColor = '#000000'; // Default border color
  btnBorderRadius = 4; // Default border radius in px
  btnBoxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)'; // Default box shadow

  // New Variables
  btnHoverBg = '#e9ecef';
  btnActiveShadow = 'inset 0 3px 5px rgba(0, 0, 0, 0.125)';
  btnDisabledBg = '#e9ecef';
  btnLinkHoverColor = '#0056b3';
  btnLinkDisabledColor = '#6c757d';
  btnLinkFocusShadowRgb = '38, 143, 255';
  btnLinkColor = '#0d6efd';
  btnTransition = 'all 0.2s ease-in-out';

  // Suggested Code Change
  btnHoverBorderColor = 'transparent';
  btnDisabledOpacity = 0.65;
  btnFocusBoxShadow = '0 0 0 0.2rem rgba(38, 143, 255, 0.5)';
  btnHoverColor = '#ffffff';
  btnActiveColor = '#ffffff';
  btnActiveBg = '#007bff';
  btnActiveBorderColor = '#0056b3';
  btnDisabledColor = '#6c757d';
  btnDisabledBorderColor = '#6c757d';
}
