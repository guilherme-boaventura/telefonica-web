import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/Grupo';
import { Plano } from 'src/app/Plano';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { PlanoService } from 'src/app/service/plano.service';
import { MatDialog } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';

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
  @Output() onCadastro : EventEmitter<any> = new EventEmitter<any>();

  constructor(private planoService : PlanoService, private popup : MatDialog) { }

  ngOnInit(): void {
  }

  onDropItem(event: CdkDragDrop<Plano>) {
    this.onDrop.emit(event);
  }

  cadastrarPlano() {
    let dialogRef = this.popup.open(PopUpComponent);

    dialogRef.afterClosed().subscribe(resp => {
      let nome = dialogRef.componentInstance.nome;
      let valor = dialogRef.componentInstance.valor;
      let grupoId = this.grupo.id;
      let ordem = this.planos.length;

      this.planoService.getAllSortedById().subscribe(response => {
        let id : number = response[response.length-1].id;
        id++;
        this.planoService.postPlano(nome,valor,grupoId,ordem,id).subscribe(response => { 
        this.planos.push(response);
        this.onCadastro.emit(response);
      });
    });
    });
  }
}