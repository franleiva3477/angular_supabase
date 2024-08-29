import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { PersonasComponent } from './componentes/personas/personas.component';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: '', redirectTo: '/personas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
