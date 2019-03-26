import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PilotoComponent } from './piloto/piloto.component';
import { ListaPilotosComponent } from './lista-pilotos/lista-pilotos.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotoComponent,
    ListaPilotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
