import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Linie } from './linie';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

constructor() { }
createDb() {
  const LINII: Linie[] = [
    { id: 1, name: 'Linia 1', nrstatii: 3, statii: 'st1, st2, st3' },
    { id: 2, name: 'Linia 3', nrstatii: 4, statii: 'st1, st2, st3, st4' },
    { id: 3, name: 'Linia 3b', nrstatii: 3, statii: 'st1, st2, st3' },
    { id: 4, name: 'Linia 5-40', nrstatii: 3, statii: 'st1, st2, st3' },
  ];
  return {LINII};
}
genId(linii: Linie[]): number {
  return linii.length > 0 ? Math.max(...linii.map(linie => linie.id)) + 1 : 1;
}
}
