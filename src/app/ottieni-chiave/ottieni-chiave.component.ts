import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ottieni-chiave',
  templateUrl: './ottieni-chiave.component.html',
  styleUrls: ['./ottieni-chiave.component.css']
})
export class OttieniChiaveComponent implements OnInit {

  @Output() newKeyEvent = new EventEmitter<string>();
  @Output() newAltroEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}