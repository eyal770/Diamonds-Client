import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Diamond } from './diamond';
import { CommonService } from './s/CommonService.service';
import { DiamondsService } from './s/diamonds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Diamonsd-Client';
  diamonds!: Diamond[];
  messageReceived: any;
  private subscriptionName: Subscription; //important to create a subscription

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
  constructor(private diamondsService: DiamondsService, private commonService: CommonService) {
    // subscribe to sender component messages
    this.subscriptionName = this.commonService.getUpdate().subscribe
      (diamond => { //message contains the data sent from service
        this.diamonds.push(diamond)
      });
  }

  ngOnDestroy() { // It's a good practice to unsubscribe to ensure no memory leaks
    this.subscriptionName.unsubscribe();
  }
}
