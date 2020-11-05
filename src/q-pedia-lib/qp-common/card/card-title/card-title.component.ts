import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  host: {
    class: 'qp-card-title'
  }
})
export class CardTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
