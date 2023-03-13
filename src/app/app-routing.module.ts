import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/pages/lista/lista.component';
import { NomePlanoComponent } from './components/pages/nome-plano/nome-plano.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },  
  { path: 'plano',component: NomePlanoComponent},
  { path: 'lista',component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

