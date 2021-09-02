import { Component} from '@angular/core';
import { ChiaveService } from './chiave.service';

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

  getKey() {
    this.service.Key().then(key => {
      fetch(this.service.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      }).then(response => response.json(), error => alert(error));
      this.key = key;
    });
    this.log = true;
  }
}
