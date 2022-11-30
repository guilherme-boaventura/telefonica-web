import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NomePlanoComponent } from './components/pages/nome-plano/nome-plano.component';

const routes: Routes = [
  { path: '', redirectTo: 'plano', pathMatch: 'full' },  
  {path: 'plano',component: NomePlanoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

