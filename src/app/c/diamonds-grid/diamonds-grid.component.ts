import { Component, Input } from '@angular/core';
import { Diamond } from 'src/app/diamond';

@Component({
  selector: 'app-diamonds-grid',
  templateUrl: './diamonds-grid.component.html',
  styleUrls: ['./diamonds-grid.component.css']
})

export class DiamondsGridComponent {
  @Input() diamonds!: Diamond[];

  constructor() {  }

}
