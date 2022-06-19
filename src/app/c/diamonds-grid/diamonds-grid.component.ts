import { DiamondsService } from 'src/app/s/diamonds.service';
import { Component, OnInit } from '@angular/core';
import { Diamond } from 'src/app/diamond';

@Component({
  selector: 'app-diamonds-grid',
  templateUrl: './diamonds-grid.component.html',
  styleUrls: ['./diamonds-grid.component.css']
})
export class DiamondsGridComponent implements OnInit {

  diamonds!: Diamond[];
  constructor(private diamondsService: DiamondsService) {


  }

  ngOnInit() {
    this.getDiamonds();
  }
  getDiamonds(): void {
    this.diamondsService.GetDiamonds()
      .subscribe(
        (diamonds) => {
          this.diamonds = diamonds;
        }
      );
  }
  // getDiamonds(): void {
  //   this.diamonds = MockDiamonds;
  // }

}
