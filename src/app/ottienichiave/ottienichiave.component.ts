import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ottienichiave',
  templateUrl: './ottienichiave.component.html',
  styleUrls: ['./ottienichiave.component.css']
})
export class OttienichiaveComponent  {

  @Output() newKeyEvent = new EventEmitter<string>();
  @Output() newAltroEvent = new EventEmitter();

  useKey(key: string) {
    this.newKeyEvent.emit(key);
  }
  getKey(){
    this.newAltroEvent.emit();
  }



}