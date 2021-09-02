import { Component, VERSION } from '@angular/core';

export class postit {
  titolo: string;
  contenuto: string;
  imp: boolean;}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Benvenuto! Ti sei loggato con chiave:';
  selezione: postit = new postit();
  postsalvato: Array<postit> = [];
  chiave = '';
}
