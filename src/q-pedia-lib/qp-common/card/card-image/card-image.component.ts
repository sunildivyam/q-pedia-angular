import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-card-image, [qp-cardimage]',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
  host: {
    class: 'qp-card-image'
  }
})
export class CardImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
