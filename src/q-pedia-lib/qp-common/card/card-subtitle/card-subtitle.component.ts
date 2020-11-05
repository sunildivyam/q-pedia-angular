import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-card-subtitle',
  templateUrl: './card-subtitle.component.html',
  styleUrls: ['./card-subtitle.component.scss'],
  host: {
    class: 'qp-card-sutitle'
  }
})
export class CardSubtitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
