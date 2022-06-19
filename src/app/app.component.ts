import { Component, OnInit } from '@angular/core';
import { Diamond } from './diamond';
import { DiamondsService } from './s/diamonds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diamonsd-Client';
  diamonds!: Diamond[];

  constructor(private diamondsService: DiamondsService) {}

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

}

