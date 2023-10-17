import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { DoencasCronicasComponent } from './component/doencas-cronicas/doencas-cronicas.component';
import { ObjetivosComponent } from './component/objetivos/objetivos.component';
import { ComoFuncionaComponent } from './component/como-funciona/como-funciona.component';
import { DiferenciaisComponent } from './component/diferenciais/diferenciais.component';
import { RepresentanteComponent } from './component/representante/representante.component';

const routes: Routes = [
  {path:'', component:NavComponent , 
    children:[
      {path:'home' , component: HomeComponent},
      {path:'sobre' , component: SobreComponent},
      {path:'doencas' , component: DoencasCronicasComponent},
      {path:'objetivos' , component: ObjetivosComponent},
      {path:'como-funciona' , component: ComoFuncionaComponent},
      {path:'diferenciais' , component: DiferenciaisComponent},
      {path:'representante' , component: RepresentanteComponent},

    ] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
