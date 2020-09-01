import { Component, OnInit } from '@angular/core';
import { Linie } from '../linie'

@Component({
  selector: 'app-linii',
  templateUrl: './linii.component.html',
  styleUrls: ['./linii.component.css']
})
export class LiniiComponent implements OnInit {
linie: Linie = {
  id: 1,
  name: "Linia 1",
  nrstatii: 3,
  statii: "st1, st2, st3"
};
  constructor() { }

  ngOnInit() {
  }

}
