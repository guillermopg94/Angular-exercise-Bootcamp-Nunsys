import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloFormComponent } from './articulo/articulo-form/articulo-form.component';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'articulo-form/:idArticulo', component: ArticuloFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
