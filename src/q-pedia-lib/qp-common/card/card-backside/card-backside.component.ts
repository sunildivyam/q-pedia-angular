import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-card-backside',
  templateUrl: './card-backside.component.html',
  styleUrls: ['./card-backside.component.scss'],
  host: {
    class: 'qp-card-backside'
  }
})
export class CardBacksideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
