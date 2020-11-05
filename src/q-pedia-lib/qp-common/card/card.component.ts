import { Component, Input, OnInit } from '@angular/core';

type ImageAlignment = 'top' | 'right' | 'bottom' | 'left' | 'overlay';


@Component({
  selector: 'qp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {'class': 'qp-card'}
})
export class CardComponent implements OnInit {
@Input() imageAlign: ImageAlignment;

  constructor() {
    this.imageAlign = 'top';
  }

  ngOnInit(): void {
  }

}
