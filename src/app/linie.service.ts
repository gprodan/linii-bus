import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Linie } from './linie';
import { LINII } from './liniitest';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LinieService {

constructor(private messageService: MessageService) { }

getLinii(): Observable<Linie[]> {
  this.messageService.add('LinieService: fetched linii');
  return of(LINII);
}
}
