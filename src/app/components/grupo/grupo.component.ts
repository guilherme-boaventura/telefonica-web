import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/Grupo';
import { Plano } from 'src/app/Plano';
import { CdkDragDrop, CdkDragSortEvent } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  @Input() grupo !: Grupo;
  @Input() planos !: Plano[];
  @Output() onDrop : EventEmitter<any> = new EventEmitter<any>();
  @Output() onSort : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDropItem(event: CdkDragDrop<Plano>) {
    this.onDrop.emit(event);
  }

  organizarGrupo(event : CdkDragSortEvent<Plano>) {
    this.onSort.emit(event);
  }

}