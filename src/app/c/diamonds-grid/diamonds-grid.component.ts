import { Component, OnInit } from '@angular/core';
import { diamond } from 'src/app/diamond';
import { MockDiamonds } from 'src/app/mock-diamonds';
import { DiamondsService } from 'src/app/s/diamonds.service';

@Component({
  selector: 'app-diamonds-grid',
  templateUrl: './diamonds-grid.component.html',
  styleUrls: ['./diamonds-grid.component.css']
})
export class DiamondsGridComponent implements OnInit {

  diamonds!: diamond[];
  constructor(private diamondsService: DiamondsService) {

    this.diamonds = this.diamondsService.GetDiamonds();

  }

  ngOnInit() {

  }

  // getDiamonds(): void {
  //   this.diamonds = MockDiamonds;
  // }

}
