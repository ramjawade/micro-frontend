import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule,FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  btnPaddingY = '1';
  btnPaddingX = '1';

  constructor(private renderer: Renderer2) {}

  updateButtonStyles(): void {
    // Dynamically update CSS variables
    this.renderer.setStyle(
      document.body,
      '--bs-btn-padding-y',
      this.btnPaddingY
    );
    this.renderer.setStyle(
      document.body,
      '--bs-btn-padding-x',
      this.btnPaddingX
    );
    document.body.style.setProperty('--bs-btn-padding-y', `${this.btnPaddingY}rem`);
    document.body.style.setProperty('--bs-btn-padding-x', `${this.btnPaddingX}rem`);
  }
}
