import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { diamond } from '../diamond';
import { MockDiamonds } from '../mock-diamonds';

@Injectable({
  providedIn: 'root'
})
export class DiamondsService {

  constructor() { }

  public GetDiamonds(): diamond[] {
    return MockDiamonds;
  }
}
