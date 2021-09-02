import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {OttieniChiaveComponent} from './ottieni-chiave/ottieni-chiave.component';
import { ChiaveService } from './chiave.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,OttieniChiaveComponent],
  bootstrap:    [ AppComponent ],
  providers: [ChiaveService]
})
export class AppModule { }
