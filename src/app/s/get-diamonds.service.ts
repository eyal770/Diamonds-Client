import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { diamond } from '../diamond';
import { Diamonds } from '../mock-diamonds';

@Injectable({
  providedIn: 'root'
})
export class GetDiamondsService {

  constructor() { }

  public GetDiamonds(): diamond[] {
    return Diamonds;
  }
}
