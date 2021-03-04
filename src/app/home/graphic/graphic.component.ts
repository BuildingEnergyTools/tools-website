import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import 'leader-line';

declare let LeaderLine: any;

const cards = ['pm', 'at', 'seed', 'csrs', 'better', 'as', '3p'] as const;
const goals = ['g1', 'g2', 'g3', 'g4'] as const;
type Card = typeof cards[number];
type Goal = typeof goals[number];

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('svg') svg: ElementRef<SVGElement>;
  cardStatus: { [key in Card]?: boolean } = {};
  elements: { [key in Card | 'g1' | 'g2' | 'g3' | 'g4' | 'seed']?: HTMLElement } = {};
  hovers: { [key in Goal]?: boolean } = {};
  hoverColor: string = '#7ab0cc';

  private _arrows: any[] = [];

  constructor(
    public sharedService: SharedService,
    @Inject(DOCUMENT) private document
  ) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this._updateArrowRef, true);

    [].forEach.call(document.images, img => {
      if (img.complete) {
        this._updateArrows();
      } else {
        img.addEventListener('load', () => this._updateArrows(), false);
      }
    });
  }

  @HostListener('window:resize', ['$event']) onResize(): void {
    console.log('resize');
    this._updateArrows();
  }

  ngOnDestroy(): void {
    this._arrows.forEach(arrow => arrow.remove());
    window.removeEventListener('scroll', this._updateArrowRef, true);
  }

  toggleCard(card: Card): void {
    if (this.cardStatus[card]) {
      this.cardStatus[card] = false;
    } else {
      cards.forEach(currentCard => {
        this.cardStatus[currentCard] = card === currentCard;
      });
    }

    setTimeout(() => this._updateArrows());
  }

  mouseEnter(div: string){
    this.hovers[div] = true;
  }

  mouseLeave(div : string): void {
    this.hovers[div] = false;
  }

  ngAfterViewInit(): void {
    [...cards, 'g1', 'g2', 'g3', 'g4'].forEach(card => {
      this.elements[card] = this.document.getElementById(card);
    });

    const options = {
      color: 'white',
      endPlug: 'arrow3',
      endPlugSize: 2,
      endSocket: 'left',
      endSocketGravity: 0,
      path: 'line',
      size: 3,
      startSocket: 'right',
      startSocketGravity: 0
    };


    // pm -> seed
    this._arrows.push(new LeaderLine(
      this.elements.pm,
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '0%',
        y: '16%'
      }),
      options
    ));

    // seed -> csrs
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '100%',
        y: '16%'
      }),
      this.elements.csrs,
      options
    ));

    // seed -> better
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '100%',
        y: '44%'
      }),
      LeaderLine.pointAnchor(this.elements.better, {
        x: '0%',
        y: '26%',
      }),
      options
    ));

    // seed -> as
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '100%',
        y: '75%'
      }),
      LeaderLine.pointAnchor(this.elements.as, {
        x: '0%',
        y: '15%'
      }),
      options
    ));

    // seed -> third-party
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '100%',
        y: '87.5%'
      }),
      this.elements['3p'],
      options
    ));

    // at -> seed
    this._arrows.push(new LeaderLine(
      this.elements.at,
       LeaderLine.pointAnchor(this.elements.seed, {
        x: '0%',
        y: '55%'
      }),
      options
    ));

    // csrs -> g1
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.csrs, {
        x: '100%',
        y: '43%'
      }),
      LeaderLine.pointAnchor(this.elements.g1, { 
        x: '0%',
        y: '54%'
      }),
      options
    ));

    // better -> g2
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.better, {
        x: '100%',
        y: '28%'
      }),
      this.elements.g2,
      options
    ));

    // as -> g3
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.as, {
        x: '100%',
        y: '25%'
      }),
      this.elements.g3,
      options
    ));

    // 3p -> g4
    this._arrows.push(new LeaderLine(
      this.elements['3p'],
      LeaderLine.pointAnchor(this.elements.g4, {
        x: '0%',
        y: '70%'
      }),
      options
    ));

  }

  private _updateArrowRef = () => this._updateArrows();

  private _updateArrows(): void {
    this._arrows.forEach(arrow => arrow.position());
  }
}
