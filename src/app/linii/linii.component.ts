import { Component, OnInit } from '@angular/core';
import { Linie } from '../linie'
import { LINII } from '../liniitest'
import { LinieService } from '../linie.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-linii',
  templateUrl: './linii.component.html',
  styleUrls: ['./linii.component.css']
})
export class LiniiComponent implements OnInit {

linii: Linie[];
  constructor(private linieService: LinieService, private messageService: MessageService) { }

  ngOnInit() {
    this.getLinii();
  }



  getLinii(): void {
    this.linieService.getLinii()
      .subscribe(linii => this.linii = linii);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.linieService.addLinie({ name } as Linie)
      .subscribe(linie => {
        this.linii.push(linie);
      });
  }
  delete(linie: Linie): void {
    this.linii = this.linii.filter(h => h !== linie);
    this.linieService.deleteLinie(linie).subscribe();
  }
}
