import { Component, OnInit } from '@angular/core';
import { GameControlService } from '../gameControl.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  letters: string[] = [];
  constructor(private gcService: GameControlService) {}

  selectedWord = '';
  arrayOfWords: any = [];
  incLetters: any = [];
  excLetters: any = [];
  result = '';
  result1 = '';
  youWon: boolean = false;
  youLost: boolean = false;
  endGame: boolean = false;
  imgNumber = 1;
  imageUrl: any;
  guesses: number = 0;

  ngOnInit(): void {
    this.imageUrl = this.gcService.imgUrl;
    this.createKeys();
    this.startGame();
  }
  createKeys() {
    for (let i = 65; i <= 90; i++) {
      this.letters.push(String.fromCharCode(i));
    }
  }

  selectedLetter(letter: string) {
    let index = this.gcService.checkWords(
      letter.toLowerCase(),
      this.selectedWord
    );
    if (index !== -1) {
      for (let item of this.arrayOfWords) {
        if (item.letter === letter.toLowerCase()) {
          item.boolean = true;
          this.incLetters.push(item.letter);
          this.result = `Bingo! ${item.letter.toUpperCase()} is included`;
        }
      }
    } else {
      this.guesses--;
      this.excLetters.push(letter);
      this.result1 = `${letter} is not included try again! you still have ${
        this.guesses
      } tries! ${this.excLetters.join()}`;
      this.imageUrl = 'assets/img/' + this.imgNumber++ + '.png';
    }
    this.gameWon();
  }

  playAgain() {
    this.guesses = this.gcService.guesses;
    this.imageUrl = this.gcService.imgUrl;
    this.arrayOfWords = [];
    this.excLetters = [];
    this.incLetters = [];
    this.imgNumber = 1;
    this.result = '';
    this.result1 = '';
    this.youWon = false;
    this.youLost = false;
    this.endGame = false;
    this.startGame();
  }
  startGame() {
    this.guesses = this.gcService.guesses;
    this.selectedWord = this.gcService.selectWord();
    console.log(this.selectedWord);
    this.createArrayOfWord(this.selectedWord);
  }

  createArrayOfWord(word: string) {
    for (let index = 0; index <= word.length - 1; index++) {
      this.arrayOfWords.push({
        boolean: false,
        hiddenLetter: '-',
        letter: word[index],
      });
    }
  }

  gameWon() {
    this.youWon = this.arrayOfWords.every((item: any) => item.boolean);
    if (this.youWon) {
      this.endGame = true;
    }
    if (this.guesses == 0) {
      this.youLost = true;
      this.endGame = true;
    } else {
      this.youLost = false;
    }
  }
}
