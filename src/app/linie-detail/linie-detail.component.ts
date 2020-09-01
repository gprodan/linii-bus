import { Component, OnInit, Input } from '@angular/core';
import { Linie } from '../linie';

@Component({
  selector: 'app-linie-detail',
  templateUrl: './linie-detail.component.html',
  styleUrls: ['./linie-detail.component.css']
})


export class LinieDetailComponent implements OnInit {
  @Input() linie: Linie;
  constructor() { }

  ngOnInit() {
  }

}
