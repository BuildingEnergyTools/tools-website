import { Component } from '@angular/core';

const cards = ['good', 'better', 'best'] as const;
type Card = typeof cards[number];

@Component({
  templateUrl: './data-standardization.component.html',
  styleUrls: ['./data-standardization.component.scss']
})
export class DataStandardizationComponent {

  cardStatus: { [key in Card]?: boolean } = {};

  toggleCard(card: Card): void {
    this.cardStatus[card] = !this.cardStatus[card];
  }
}
