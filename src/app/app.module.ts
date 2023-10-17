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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SobreComponent,
    DoencasCronicasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
