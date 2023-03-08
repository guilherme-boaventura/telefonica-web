import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NomePlanoComponent } from './components/pages/nome-plano/nome-plano.component';
import { PlanoService } from './service/plano.service';
import { ListaComponent } from './components/pages/lista/lista.component';
import { CardPlanoComponent } from './components/card-plano/card-plano.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { GrupoComponent } from './components/grupo/grupo.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NomePlanoComponent,
    ListaComponent,
    CardPlanoComponent,
    GrupoComponent,
    PopUpComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: PlanoService, deps: [HttpClient]}],
  bootstrap: [AppComponent],
  entryComponents: [PopUpComponent]
})
export class AppModule { }
