import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/Grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PlanoService } from 'src/app/service/plano.service';
import { Plano } from 'src/app/Plano';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  grupoPlanos : Map<Grupo, Plano[]> = new Map<Grupo, Plano[]>();
  grupos !: Grupo[];
 
  constructor(private planoService : PlanoService, private grupoService : GrupoService) { }

  ngOnInit(): void {
    this.grupoService.getAll().subscribe((grupos) => {
      this.grupos = grupos;
      grupos.forEach(grupo => {
        this.planoService.getByGrupo(grupo.id).subscribe(planos => {
          this.grupoPlanos.set(grupo, planos);
        });
      });
    });
  }
  
  dropPlano(event : CdkDragDrop<Plano>) {
    if(event.previousContainer !== event.container){
      let plano : Plano = event.item.data;
      plano.grupoId = parseInt(event.container.id);
      this.planoService.moverPlano(plano).subscribe(response => {
        plano = response;
      });
     
      let containerAnterior = this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.previousContainer.id))[0]);
      let containerAtual = this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.container.id))[0]);
      
      transferArrayItem(containerAnterior, containerAtual, event.previousIndex, event.currentIndex);

      for (let index = 0; index < containerAnterior.length; index++) {
        containerAnterior[index].ordem = index;
        this.planoService.moverPlano(containerAnterior[index]).subscribe(response => {
          containerAnterior[index] = response;
        });
      }

      for (let index = 0; index < containerAtual.length; index++) {
        containerAtual[index].ordem = index;
        this.planoService.moverPlano(containerAtual[index]).subscribe(response => {
          containerAtual[index] = response;
        });
      }
    }else{
      this.organizarPlanos(event);
    }
  }

  organizarPlanos(event : CdkDragDrop<Plano>){
    let container = this.grupoPlanos.get(this.grupos.filter(grupo => grupo.id == Number(event.container.id))[0]);
    moveItemInArray(container, event.previousIndex, event.currentIndex);

    for (let index = 0; index < container.length; index++) {
      container[index].ordem = index;
      this.planoService.moverPlano(container[index]).subscribe(response => container[index] = response);
    }
  }

  organizarGrupos(event : CdkDragDrop<Grupo>){
    moveItemInArray(this.grupos, event.previousIndex, event.currentIndex);
    
    let index = 0;
    for (let grupo of this.grupoPlanos.keys()){
      grupo = this.grupos[index];
      grupo.ordem = index;

      this.grupoService.moverGrupo(grupo).subscribe(response => grupo  = response);
      index++;
    }
  }

  adicionarTarefa(planoNovo : Plano) {
    this.grupoService.getById(planoNovo.grupoId).subscribe(response => {
      this.grupoPlanos.get(response).push(planoNovo);
    });
  }

  cadastrarGrupo() {
    let nome = prompt("Nome do grupo:");
    let ordem = this.grupos.length;
    this.grupoService.getAllSortedById().subscribe(response => {
      let id : number = response[response.length-1].id;
      id++;
      this.grupoService.postGrupo(nome,ordem,id).subscribe(response => { 
        this.grupos.push(response);
        this.grupoPlanos.set(response, []);
      });
    });    
  }
}