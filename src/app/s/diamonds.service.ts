import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Diamond } from '../diamond';

@Injectable({
  providedIn: 'root'
})
export class DiamondsService {

  constructor(private httpClient: HttpClient) { }

  public GetDiamonds(): Observable<Diamond[]> {

    return this.httpClient.get<Diamond[]>('http://localhost:42516/api/Diamonds')
    .pipe(map(
      result => {
        return result;
      }));

  }
  addDiamond(diamond: Diamond): Observable<Diamond> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Diamond>('http://localhost:42516/api/Diamonds', diamond, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
