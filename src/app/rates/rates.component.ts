import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
})
export class RatesComponent implements DoCheck, OnChanges {
  @Input() rates: { inr: number } = { inr: 0 };
  oldRate = 0;
  diff = undefined;

  ngOnChanges(changes: SimpleChanges) {
    // This will only capture rates changes if we change it by reference
    console.log('Is first change?', changes.rates.firstChange);
  }

  ngDoCheck() {
    if (this.rates.inr !== this.oldRate) {
      this.diff = this.rates.inr - this.oldRate;
      this.oldRate = this.rates.inr;
    }
  }
}
