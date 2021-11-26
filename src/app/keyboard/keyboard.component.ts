import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Input() letters: string[] = [];
  @Output() sendLetterToFather= new EventEmitter<string>();
  constructor() { }
  selectedLetter(letter: string){
    this.sendLetterToFather.emit(letter)
  }
  ngOnInit(): void {
  }

}
