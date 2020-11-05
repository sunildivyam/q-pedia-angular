import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.scss'],
  host: {
    class: 'qp-card-actions'
  }
})
export class CardActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
