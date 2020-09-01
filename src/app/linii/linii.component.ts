import { Component, OnInit } from '@angular/core';
import { Linie } from '../linie'
import { LINII } from '../liniitest'

@Component({
  selector: 'app-linii',
  templateUrl: './linii.component.html',
  styleUrls: ['./linii.component.css']
})
export class LiniiComponent implements OnInit {
linii = LINII;
  constructor() { }

  ngOnInit() {
  }

  selectedLinie: Linie;
  onSelect(linie: Linie): void {
    this.selectedLinie = linie;
  }

}
