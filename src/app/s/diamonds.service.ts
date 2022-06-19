import { HttpClient } from '@angular/common/http';
import { MockDiamonds } from 'src/app/mock-diamonds';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Diamond } from '../diamond';

@Injectable({
  providedIn: 'root'
})
export class DiamondsService {

  constructor(private httpClient: HttpClient) { }

  // public GetDiamonds(): Diamond[] {
  //   return MockDiamonds;
  // }

  public GetDiamonds(): Observable<Diamond[]> {

    return this.httpClient.get<Diamond[]>('http://localhost:42516/api/Diamonds')
    .pipe(map(
      result => {
        return result;
      }));

  }

}
