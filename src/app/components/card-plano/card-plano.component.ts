import { Component, Input, OnInit } from '@angular/core';
import { Plano } from 'src/app/Plano';

@Component({
  selector: 'app-card-plano',
  templateUrl: './card-plano.component.html',
  styleUrls: ['./card-plano.component.css']
})
export class CardPlanoComponent implements OnInit {

  @Input() plano : Plano;

  constructor() { }

  ngOnInit(): void {
  }

}
