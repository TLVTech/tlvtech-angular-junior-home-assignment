import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css'],
})
export class ResultCardComponent implements OnInit {
  @Input() 'title': string;
  @Input() 'id': string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.title);
  }
}
