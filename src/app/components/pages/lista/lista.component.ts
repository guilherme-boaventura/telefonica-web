import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/Grupo';
import { Plano } from 'src/app/Plano';
import { GrupoService } from 'src/app/service/grupo.service';
import { PlanoService } from 'src/app/service/plano.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  planos !: Plano[];
  grupos !: Grupo[];

  constructor(private planoService : PlanoService, private grupoService : GrupoService) { }

  ngOnInit(): void {
    this.planoService.getAll().subscribe((planos) => (this.planos = planos));
    this.grupoService.getAll().subscribe((grupos) => (this.grupos = grupos));
  }

}
