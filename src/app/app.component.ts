import { Component } from '@angular/core';
import { GameControlService } from './gameControl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hangman';
  GameWords = [] as any;

  constructor(private gameControlService: GameControlService) {}
  ngOnInIt() {
    this.GameWords = this.gameControlService.getGameWords();
  }
}
