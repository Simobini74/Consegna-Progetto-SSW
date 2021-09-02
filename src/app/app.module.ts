import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificaComponent } from './notifica/notifica.component';
import { NuovopostComponent } from './nuovopost/nuovopost.component';
import {OttienichiaveComponent} from './ottienichiave/ottienichiave.component';
import { ChiaveService } from './chiave.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent,OttienichiaveComponent,NotificaComponent,NuovopostComponent],
  bootstrap:    [ AppComponent ],
  providers: [ChiaveService]
})
export class AppModule { }
