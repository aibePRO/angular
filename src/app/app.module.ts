import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PilotoComponent } from './piloto/piloto.component';
import { ListaPilotosComponent } from './lista-pilotos/lista-pilotos.component';
import { AltaPilotoComponent } from './alta-piloto/alta-piloto.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotoComponent,
    ListaPilotosComponent,
    AltaPilotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
