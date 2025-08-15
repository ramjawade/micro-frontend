import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  cardSpacerY = 1;
  cardSpacerX = 1;
  cardTitleColor = '#212529';
  cardSubtitleColor = '#495057';
  cardBorderWidth = 1;
  cardBorderColor = '#ced4da';
  cardBorderRadius = 0.5;
  cardBg = '#f8f9fa';
  cardBoxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  cardTitleSpacerY = 0.75;
  cardInnerBorderRadius = 0.5;
  cardCapPaddingY = 1;
  cardCapPaddingX = 1.5;
  cardCapBg = '#e9ecef';
  cardCapColor = '#343a40';
  cardHeight = 'auto';
  cardColor = '#212529';
  cardImgOverlayPadding = 1;
  cardGroupMargin = 1;

  // Add more enterprise-specific variables if needed
}
