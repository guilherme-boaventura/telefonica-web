import { Component, OnInit } from '@angular/core';
import { Plano } from 'src/app/Plano';
import { PlanoService } from 'src/app/service/plano.service';

@Component({
  selector: 'app-nome-plano',
  templateUrl: './nome-plano.component.html',
  styleUrls: ['./nome-plano.component.css']
})
export class NomePlanoComponent implements OnInit {

  constructor(private planoService : PlanoService) { }

  ngOnInit(): void {
  }

  id !: number;
  plano !: Plano;

  obterPlano() {
    console.log(this.id + " - NO METODO");
      this.planoService.getById(this.id).subscribe((plano) => (this.plano = plano));
  }

}