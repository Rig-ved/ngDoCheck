import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rates: { inr: number } = { inr: 0 };

  updateRates() {
    const data = parseInt((Math.random() * 100).toFixed(2));
    this.rates.inr = data;
  }

  updateRatesByReference() {
    const data = parseInt((Math.random() * 100).toFixed(2));

    this.rates = { inr: data };
  }
}
