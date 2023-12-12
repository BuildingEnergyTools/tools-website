import { Component } from '@angular/core';

const cards = ['pm', 'at', 'seed', 'csrs', 'better', 'as', '3p'] as const;
const goals = ['g1', 'g2', 'g3', 'g4'] as const;
type Card = typeof cards[number];
type Goal = typeof goals[number];

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent {
  cardStatus: { [key in Card]?: boolean } = {};
  elements: { [key in Card | 'g1' | 'g2' | 'g3' | 'g4' | 'seed']?: HTMLElement } = {};
  hovers: { [key in Goal]?: boolean } = {};

  toggleCard(card: Card): void {
    if (this.cardStatus[card]) {
      this.cardStatus[card] = false;
    } else {
      cards.forEach(currentCard => {
        this.cardStatus[currentCard] = card === currentCard;
      });
    }
  }

  mouseEnter(div: Goal): void {
    this.hovers[div] = true;
  }

  mouseLeave(div: Goal): void {
    this.hovers[div] = false;
  }

}
