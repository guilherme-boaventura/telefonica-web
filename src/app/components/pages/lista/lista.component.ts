import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/Grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { CdkDragDrop, CdkDragSortEvent, moveItemInArray } from '@angular/cdk/drag-drop';
import { PlanoService } from 'src/app/service/plano.service';
import { Plano } from 'src/app/Plano';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  grupoPlanos : Map<Grupo, Plano[]> = new Map<Grupo, Plano[]>();
  planos : Plano[] = [];
  grupos !: Grupo[];
 
  constructor(private planoService : PlanoService, private grupoService : GrupoService) { }

  ngOnInit(): void {
    this.grupoService.getAll().subscribe((grupos) => {
      this.grupos = grupos;
      grupos.forEach(grupo => {
        let planos : Plano[];
        this.planoService.getByGrupo(grupo.id).subscribe(retornado => {
          planos = retornado;
          this.planos = this.planos.concat(planos);
          this.grupoPlanos.set(grupo, planos);
        });
      });
    });
  }
  
  dropPlano(event : CdkDragDrop<Grupo>) {
    if(event.previousContainer !== event.container){
      let plano : Plano = event.item.data;
      plano.grupoId = parseInt(event.container.id);
      this.planoService.moverPlano(plano).subscribe(response => {
        plano = response;
      });
      this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.previousContainer.id))[0]).splice(event.previousIndex, 1, );
      this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.container.id))[0]).splice(event.currentIndex, 0, plano);
    }
  }

  organizarGrupo(event : CdkDragSortEvent<Plano>){
    moveItemInArray(this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.container.id))[0]), event.previousIndex, event.currentIndex);
  }
  
  reordenar(event: CdkDragDrop<string[]>) {
    let grupo : Grupo = this.grupos.filter(grupo => grupo.id == Number(event.container.id))[0];
    if(event.previousContainer === event.container){
      moveItemInArray(this.grupoPlanos.get(grupo), event.previousIndex,event.currentIndex);
    }else{
      let grupoAnterior : Grupo = this.grupos.filter(grupo => grupo.id == Number(event.previousContainer.id))[0];
      let index = this.grupoPlanos.get(grupoAnterior).indexOf(event.item.data);
      this.grupoPlanos.get(grupoAnterior).splice(index,1);

      console.log(this.grupoPlanos.get(grupo)[0]);

      index = this.grupoPlanos.get(grupo).indexOf(event.item.data);
      this.grupoPlanos.get(grupo);
      
      console.log(this.grupoPlanos.get(grupo)[0]);
    }
  }
}