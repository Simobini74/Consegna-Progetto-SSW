import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificaComponent } from './notifica/notifica.component';
import {OttieniChiaveComponent} from './ottieni-chiave/ottieni-chiave.component';
import { ChiaveService } from './chiave.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent,OttieniChiaveComponent,NotificaComponent],
  bootstrap:    [ AppComponent ],
  providers: [ChiaveService]
})
export class AppModule { }
