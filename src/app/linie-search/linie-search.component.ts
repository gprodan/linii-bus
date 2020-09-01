import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Linie } from '../linie';
import { LinieService } from '../linie.service';

@Component({
  selector: 'app-linie-search',
  templateUrl: './linie-search.component.html',
  styleUrls: ['./linie-search.component.css']
})

export class LinieSearchComponent implements OnInit {
linii$: Observable<Linie[]>;
private searchTerms = new Subject<string>();

  constructor(private linieService: LinieService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.linii$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.linieService.searchLinii(term)),
    );
  }

}
