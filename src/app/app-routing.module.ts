import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { DoencasCronicasComponent } from './component/doencas-cronicas/doencas-cronicas.component';

const routes: Routes = [
  {path:'', component:NavComponent , 
    children:[
      {path:'home' , component: HomeComponent},
      {path:'sobre' , component: SobreComponent},
      {path:'doencas' , component: DoencasCronicasComponent},

    ] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
