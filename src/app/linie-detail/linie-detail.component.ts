import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LinieService } from '../linie.service';
import { Linie } from '../linie';

@Component({
  selector: 'app-linie-detail',
  templateUrl: './linie-detail.component.html',
  styleUrls: ['./linie-detail.component.css']
})


export class LinieDetailComponent implements OnInit {
  @Input() linie: Linie;
  constructor(private route: ActivatedRoute,
    private linieService: LinieService,
    private location: Location) { }

  ngOnInit() {
    this.getLinie();
  }

  getLinie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.linieService.getLinie(id)
      .subscribe(linie => this.linie = linie);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.linieService.updateLinie(this.linie)
      .subscribe(() => this.goBack());
  }

}
