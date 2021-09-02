import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {OttieniChiaveComponent} from './ottieni-chiave/ottieni-chiave.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,OttieniChiaveComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
