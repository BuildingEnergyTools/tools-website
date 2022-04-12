import { Component} from '@angular/core';
import { SharedService } from '@shared/services/shared.service';

const cards = ['good', 'better', 'best'] as const;
type Card = typeof cards[number];

@Component({
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.scss']
})
export class HelpDeskComponent {
	
	cardStatus: { [key in Card]?: boolean } = {};
  constructor(
    public sharedService: SharedService ) {
  }

  toggleCard(card: Card): void {
  	
    if (this.cardStatus[card]) {
      this.cardStatus[card] = false;
    } else {
      this.cardStatus[card] = true;
      //cards.forEach(currentCard => {
      //  this.cardStatus[currentCard] = card === currentCard;
      //});
    }
  }
}