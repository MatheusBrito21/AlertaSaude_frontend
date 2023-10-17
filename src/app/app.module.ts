import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { NavComponent } from './component/nav/nav.component';
import { SobreComponent } from './component/sobre/sobre.component';
import {MatButtonModule} from '@angular/material/button';
import { DoencasCronicasComponent } from './component/doencas-cronicas/doencas-cronicas.component';
import { DiferenciaisComponent } from './component/diferenciais/diferenciais.component';
import { RepresentanteComponent } from './component/representante/representante.component';
import { ObjetivosComponent } from './component/objetivos/objetivos.component';
import { ComoFuncionaComponent } from './component/como-funciona/como-funciona.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SobreComponent,
    DoencasCronicasComponent,
    DiferenciaisComponent,
    RepresentanteComponent,
    ObjetivosComponent,
    ComoFuncionaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
