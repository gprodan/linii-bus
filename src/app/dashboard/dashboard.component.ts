import { Component, OnInit } from '@angular/core';
import { Linie } from '../linie';
import { LinieService } from '../linie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
linii: Linie[] = [];

  constructor(private linieService: LinieService) { }

  ngOnInit() {
    this.getLinii();
  }

  getLinii(): void {
    this.linieService.getLinii()
      .subscribe(linii => this.linii = linii.slice(0, 5));
  }

}
