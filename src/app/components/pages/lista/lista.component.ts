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

      let containerAnterior = this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.previousContainer.id))[0]);
      let containerAtual = this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.container.id))[0]);

      let index = containerAnterior.indexOf(plano);

      console.log(event.currentIndex);

      containerAnterior.splice(index, 1);
      for (let index = 0; index < containerAnterior.length; index++) {
        containerAnterior[index].ordem = index;
      }
      containerAtual.splice(event.currentIndex, 0, plano);
      for (let index = 0; index < containerAtual.length; index++) {
        containerAtual[index].ordem = index;
      }
    }
  }

  organizarPlanos(event : CdkDragSortEvent<Plano>){
    let container = this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.container.id))[0]);
    moveItemInArray(container, event.previousIndex, event.currentIndex);

    for (let index = 0; index < container.length; index++) {
      container[index].ordem = index;
      this.planoService.moverPlano(container[index]).subscribe(response => container[index] = response);
    }
  }

  organizarGrupos(event : CdkDragSortEvent<Grupo>){
    moveItemInArray(this.grupos, event.previousIndex, event.currentIndex);

    for (let index = 0; index < this.grupos.length; index++) {
      this.grupos[index].ordem = index;
      this.grupoService.moverGrupo(this.grupos[index]).subscribe(response => this.grupos[index] = response);
    }
  }
}