import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  onCadastroPlano : EventEmitter<any> = new EventEmitter<any>();

  nome !: String;
  valor !: number;

  constructor(public dialogRef: MatDialogRef<PopUpComponent>) { }

  ngOnInit(): void {
  }

  criarPlano() {
    this.dialogRef.close();
  }

}