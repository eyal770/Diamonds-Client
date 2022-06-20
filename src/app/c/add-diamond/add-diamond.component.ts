import { Diamond } from './../../diamond';
import { Component, OnInit } from '@angular/core';
import { DiamondsService } from 'src/app/s/diamonds.service';



@Component({
  selector: 'app-add-diamond',
  templateUrl: './add-diamond.component.html',
  styleUrls: ['./add-diamond.component.css']
})
export class AddDiamondComponent implements OnInit {
  diamondToAdd!: Diamond;
  shape!: string;
  size!: number;
  color!: string;
  clarity!: string;
  price!: number;
  listPrice!: number;

  constructor(private diamondsService: DiamondsService) { }

  ngOnInit() {
  }

  validateAddDiamond() {

    if (!Number(this.price)) {
      alert("price has to be a number");
      return;
    }

    if (!Number(this.listPrice)) {
      alert("listPrice has to be a number");
      return;
    }

    if (!Number(this.size)) {
      alert("size has to be a number");
      return;
    }

    this.diamondToAdd = {
      shape: this.shape,
      clarity: this.clarity,
      color: this.color,
      price: +this.price,
      listPrice: +this.listPrice,
      size: +this.size
    }

    this.diamondsService
      .addDiamond(this.diamondToAdd)
      .subscribe(
        diamond =>
          console.log(diamond.id));
  }


}
