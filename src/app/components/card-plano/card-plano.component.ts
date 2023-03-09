import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Plano } from 'src/app/Plano';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card-plano',
  templateUrl: './card-plano.component.html',
  styleUrls: ['./card-plano.component.css']
})
export class CardPlanoComponent implements OnInit {

  @Input() plano : Plano;
  @Output() onDrop : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDropItem(event : CdkDragDrop<Plano>) {
    this.onDrop.emit(event);
  }

}
