import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
  host: {
    class: 'qp-card-body'
  }
})
export class CardBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
