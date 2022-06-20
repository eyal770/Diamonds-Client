import { Diamond } from 'src/app/diamond';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonService {
  private subjectName = new Subject<Diamond>(); //need to create a subject

  sendUpdate(diamond: Diamond) { //the component that wants to update something, calls this fn
    this.subjectName.next(diamond); //next() will feed the value in Subject
  }

  getUpdate(): Observable<Diamond> { //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
}
