import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

  cardStatus = {};

  constructor() {

    this.cardStatus = {
      'pm': false, 
      'at': false, 
      'seed': false, 
      'csrs': false, 
      'as': false, 
      '3p': false, 
      'bsync1': false, 
      'bsync2': false
    };


   }

  ngOnInit(): void {
  }

  toggleCard(card): void {
		this.cardStatus[card] = !this.cardStatus[card]
	};

}
