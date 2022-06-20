import { Diamond } from './../../diamond';
import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-diamond-statistics',
  templateUrl: './diamond-statistics.component.html',
  styleUrls: ['./diamond-statistics.component.css']
})
export class DiamondStatisticsComponent implements AfterViewChecked {
  @Input() diamonds!: Diamond[];

  numOfDiamonds!: number;
  averagePrice!: string;
  averageDiscount!: string;
  minPrice!: any;

  ngAfterViewChecked() {

    this.minPrice = Math.min(...this.diamonds.map(d => d.price))
    this.numOfDiamonds = this.diamonds.length;
    this.averagePrice = (this.diamonds.reduce((prev, curr) => prev + curr.price, 0) / this.diamonds.length).toFixed(2);
    this.averageDiscount = (this.diamonds.reduce((prev, curr) => prev + curr.listPrice - curr.price, 0) / this.diamonds.length).toFixed(2);
  }
}
