import { Component} from '@angular/core';
import { ChiaveService } from './chiave.service';

export class postit {
  titolo: string;
  contenuto: string;
  imp: boolean;}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Benvenuto! Ti sei loggato con chiave:';
  selezione: postit = new postit();
  postsalvato: Array<postit> = [];
  importante: Array<postit>;
  chiave = '';
  log : boolean=false;
  click: boolean = false;
  aggiungi: boolean = false;
  constructor(private service: ChiaveService) {}

  login(k: string) {
    this.service.apiKEY = k;
    this.service
      .getData()
      .then(response => response.json(), error => alert(error))
      .then(data => {
        let obj = JSON.parse(data);
        for (let i in obj) {
          this.postsalvato.push(obj[i]);
        }
        this.log = true;
        this.chiave = k;
      });
  }
  getKey() {
    this.service.Key().then(key => {
      fetch(this.service.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      }).then(response => response.json(), error => alert(error));
      this.chiave = key;
    });
    this.log = true;
  }
}
