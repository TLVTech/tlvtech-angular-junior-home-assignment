import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css'],
})
export class ResultCardComponent implements OnInit {
  @Input() 'location': string;
  @Input() 'forecasts': any[];
  @Input() 'currentTemperatureImperial': string;
  @Input() 'currentTemperatureMetric': string;
  @Input() 'key': string;
  @Input() 'img': string;
  displayElement: boolean = false;
  isImperial: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      if (this.location === '') {
        this.displayElement = false;
      } else {
        this.displayElement = true;
      }
    }, 50);
  }

  handleTemperatureType() {
    this.isImperial = !this.isImperial;
  }
}
