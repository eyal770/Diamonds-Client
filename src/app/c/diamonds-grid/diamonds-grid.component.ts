import { Component, OnInit } from '@angular/core';
import { diamond } from 'src/app/diamond';
import { MockDiamonds } from 'src/app/mock-diamonds';

@Component({
  selector: 'app-diamonds-grid',
  templateUrl: './diamonds-grid.component.html',
  styleUrls: ['./diamonds-grid.component.css']
})
export class DiamondsGridComponent implements OnInit {

  diamonds!: diamond[];
  constructor() { }

  ngOnInit() {
    this.getDiamonds();

  }

  getDiamonds(): void {
    this.diamonds = MockDiamonds;
  }

}
