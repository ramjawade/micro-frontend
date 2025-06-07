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
  cardTitleColor = '#000000';
  cardSubtitleColor = '#6c757d';
  cardBorderWidth = 1;
  cardBorderColor = '#dee2e6';
  cardBorderRadius = 0.25;
  cardBg = '#ffffff';
  cardBoxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  cardTitleSpacerY = 0.5;
  cardInnerBorderRadius = 0.25;
  cardCapPaddingY = 0.75;
  cardCapPaddingX = 1.25;
  cardCapBg = '#f8f9fa';
  cardCapColor = '#212529';
  cardHeight = 'auto';
  cardColor = '#212529';
  cardImgOverlayPadding = 1;
  cardGroupMargin = 0.75;
}
