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
  selectedLinie: Linie;
linii: Linie[];
  constructor(private linieService: LinieService, private messageService: MessageService) { }

  ngOnInit() {
    this.getLinii();
  }


  onSelect(linie: Linie): void {
    this.selectedLinie = linie;
    this.messageService.add(`LiniiComponent: Selected linie id=${linie.id}`);
  }

  getLinii(): void {
    this.linieService.getLinii()
      .subscribe(linii => this.linii = linii);
  }

}
