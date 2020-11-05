import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  host: {
    class: 'qp-card-header'
  }
})
export class CardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
