import { Component, OnInit } from '@angular/core';
import { PlanoService } from 'src/app/service/plano.service';
import { Plano } from 'src/app/Plano';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private planoService: PlanoService) { }

  ngOnInit(): void {
  }

  login !: String;
  senha !: String;

  plano !: Plano;
  id !: number;

  getPlanoById(id:number){
    this.planoService.getById(id).subscribe((plano) => (this.plano = plano));
  }
}
