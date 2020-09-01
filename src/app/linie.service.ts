import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Linie } from './linie';
import { LINII } from './liniitest';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinieService {
  private liniiUrl = 'api/linii';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(private http: HttpClient, private messageService: MessageService) { }

getLinii(): Observable<Linie[]> {
  this.messageService.add('LinieService: fetched linii');
 // return of(LINII);
 return this.http.get<Linie[]>(this.liniiUrl)
 .pipe(
  tap(_ => this.log('fetched linii')),
  catchError(this.handleError<Linie[]>('getLinii', []))
);
}
getLinie(id: number): Observable<Linie> {
  // TODO: send the message _after_ fetching the hero
  //this.messageService.add(`LinieService: fetched linie id=${id}`);
  //return of(LINII.find(linie => linie.id === id));
  const url = `${this.liniiUrl}/${id}`;
  return this.http.get<Linie>(url).pipe(
    tap(_ => this.log(`fetche linie id=${id}`)),
    catchError(this.handleError<Linie>(`getLinie id=${id}`))
  )
}

updateLinie(linie: Linie): Observable<any> {
  return this.http.put(this.liniiUrl, linie, this.httpOptions).pipe(
    tap(_ => this.log(`updated linie id=${linie.id}`)),
    catchError(this.handleError<any>('updateLinie'))
  );
}

addLinie(linie: Linie): Observable<Linie> {
  return this.http.post<Linie>(this.liniiUrl, linie, this.httpOptions).pipe(
    tap((newLinie: Linie) => this.log(`added linie w/ id=${newLinie.id}`)),
    catchError(this.handleError<Linie>('addLinie'))
  );
}

deleteLinie(linie: Linie | number): Observable<Linie> {
  const id = typeof linie === 'number' ? linie : linie.id;
  const url = `${this.liniiUrl}/${id}`;

  return this.http.delete<Linie>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted linie id=${id}`)),
    catchError(this.handleError<Linie>('deleteLinie'))
  );
}

searchLinii(term: string): Observable<Linie[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Linie[]>(`${this.liniiUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found linii matching "${term}"`) :
       this.log(`no linii matching "${term}"`)),
    catchError(this.handleError<Linie[]>('searchLinii', []))
  );
}

private log(message: string) {
  this.messageService.add(`LinieService: ${message}`);
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
