export interface RatesInterface {
  inr: number;
}

import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
})
export class RatesComponent implements OnInit, DoCheck, OnChanges {
  @Input() rates: { inr: number } = { inr: 0 };

  oldRate = 0;
  diff = undefined;
  // differ: any;
  differ: KeyValueDiffer<string, number>;

  constructor(
    private cd: ChangeDetectorRef,
    private _differ: KeyValueDiffers
  ) {}

  ngOnInit() {
    this.differ = this._differ.find(this.rates).create();
  }
  ngOnChanges(changes: SimpleChanges) {
    // This will only capture rates changes if we change it by reference
    console.log('Is first change?', changes.rates);
  }

  ngDoCheck() {
    //  The below code will work perfectly as we are doing for changes in rates
    // if (this.rates.inr !== this.oldRate) {
    //   this.diff = this.rates.inr - this.oldRate;
    //   this.oldRate = this.rates.inr;
    //   this.cd.markForCheck();
    // }
    if (this.differ) {
      const changes = this.differ.diff(this.rates);
      changes.forEachChangedItem((item) => {
        this.diff = item.currentValue.valueOf() - item.previousValue.valueOf();
      });
    }
  }
}
