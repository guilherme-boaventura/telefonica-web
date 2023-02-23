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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NomePlanoComponent,
    ListaComponent,
    CardPlanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: PlanoService, deps: [HttpClient]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
