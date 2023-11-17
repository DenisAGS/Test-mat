import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Front1aComponent } from './front1a/front1a.component';
import { PrincipalComponent } from './principal/principal.component';
import { Front3aComponent } from './front3a/front3a.component';
import { Front5aComponent } from './front5a/front5a.component';

const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent
  },
  {
    path:'opcion1a',
    component: Front1aComponent
  },
  {
    path:'opcion3a',
    component: Front3aComponent
  },
  {
    path:'opcion5a',
    component: Front5aComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
