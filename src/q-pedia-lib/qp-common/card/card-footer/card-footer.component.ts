import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
  host: {
    class: 'qp-card-footer'
  }
})
export class CardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
