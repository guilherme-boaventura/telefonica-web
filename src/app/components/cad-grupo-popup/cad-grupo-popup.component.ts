import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cad-grupo-popup',
  templateUrl: './cad-grupo-popup.component.html',
  styleUrls: ['./cad-grupo-popup.component.css']
})
export class CadGrupoPopupComponent implements OnInit {

  nome !: String;

  constructor(public dialogRef: MatDialogRef<CadGrupoPopupComponent>) { }

  ngOnInit(): void {
  }

  criarGrupo() {
    this.dialogRef.close();
  }

}
