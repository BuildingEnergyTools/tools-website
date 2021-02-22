import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import 'leader-line';

declare let LeaderLine: any;

const cards = ['pm', 'at', 'seed', 'csrs', 'better', 'as', '3p', 'bsync1', 'bsync2'] as const;
type Card = typeof cards[number];

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('svg') svg: ElementRef<SVGElement>;
  cardStatus: { [key in Card]?: boolean } = {};
  elements: { [key in Card | 'g1' | 'g2' | 'g3' | 'g4' | 'under-seed' | 'devBsync1' | 'devBsync2']?: HTMLElement } = {};

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
    console.log('toggle');
    this.cardStatus[card] = !this.cardStatus[card];
    setTimeout(() => this._updateArrows());
  }

  ngAfterViewInit(): void {
    [...cards, 'g1', 'g2', 'g3', 'g4', 'under-seed', 'devBsync1', 'devBsync2'].forEach(card => {
      this.elements[card] = this.document.getElementById(card);
    });

    const options = {
      color: 'white',
      endPlug: 'arrow3',
      endPlugSize: 2,
      endSocket: 'left',
      endSocketGravity: 0,
      path: 'grid',
      size: 3,
      startSocket: 'right',
      startSocketGravity: 0
    };

    // For Developers
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.devBsync1, {
        x: 0,
        y: 'auto'
      }),
      this.elements.bsync1,
      Object.assign({}, options, {
        color: '#f5af13',
        endPlug: 'behind',
        endSocket: 'bottom',
        path: 'straight',
        size: 4,
        startSocket: 'top'
      })
    ));

    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.devBsync2, {
        x: 0,
        y: 'auto'
      }),
      this.elements.bsync2,
      Object.assign({}, options, {
        color: '#f5af13',
        endPlug: 'behind',
        endSocket: 'bottom',
        path: 'straight',
        size: 4,
        startSocket: 'top'
      })
    ));

    // pm -> seed
    this._arrows.push(new LeaderLine(
      this.elements.pm,
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '0%',
        y: '12.5%'
      }),
      options
    ));

    // seed -> csrs
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '100%',
        y: '12.5%'
      }),
      this.elements.csrs,
      options
    ));

    // seed -> better
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '100%',
        y: '37.5%'
      }),
      this.elements.better,
      options
    ));

    // seed -> bsync2
    this._arrows.push(new LeaderLine(
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '100%',
        y: '62.5%'
      }),
      this.elements.bsync2,
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

    // at -> bsync1
    this._arrows.push(new LeaderLine(
      this.elements.at,
      this.elements.bsync1,
      options
    ));

    // bsync1 -> seed
    this._arrows.push(new LeaderLine(
      this.elements.bsync1,
      LeaderLine.pointAnchor(this.elements.seed, {
        x: '0%',
        y: '62.5%'
      }),
      options
    ));

    // bsync2 -> as
    this._arrows.push(new LeaderLine(
      this.elements.bsync2,
      this.elements.as,
      options
    ));

    // csrs -> g1
    this._arrows.push(new LeaderLine(
      this.elements.csrs,
      this.elements.g1,
      options
    ));

    // better -> g2
    this._arrows.push(new LeaderLine(
      this.elements.better,
      this.elements.g2,
      options
    ));

    // as -> g3
    this._arrows.push(new LeaderLine(
      this.elements.as,
      this.elements.g3,
      options
    ));

    // 3p -> g4
    this._arrows.push(new LeaderLine(
      this.elements['3p'],
      this.elements.g4,
      options
    ));

    // g4 -> under-seed
    this._arrows.push(new LeaderLine(
      this.elements.g4,
      LeaderLine.pointAnchor(this.elements['under-seed'], {
        x: '100%',
        y: '100%'
      }),
      Object.assign({}, options, {
        startSocket: 'bottom',
        endSocket: 'right'
      })
    ));

    // under-seed -> seed
    this._arrows.push(new LeaderLine(
      this.elements['under-seed'],
      this.elements.seed,
      Object.assign({}, options, {
        startSocket: 'top',
        endSocket: 'bottom'
      })
    ));
  }

  private _updateArrowRef = () => this._updateArrows();

  private _updateArrows(): void {
    this._arrows.forEach(arrow => arrow.position());
  }
}
