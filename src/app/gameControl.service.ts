export class GameControlService {
  private gameWords = ['score', 'steel', 'equal', 'sugar', 'senior', 'broken'];

  excLetters = [];
  incLetters = [];
  guesses = 7;
  imgUrl = 'assets/save-me.png';

  getGameWords() {
    return this.gameWords.slice();
  }

  selectWord() {
    return this.gameWords[Math.floor(Math.random() * this.gameWords.length)];
  }

  checkWords(letter: string, word: string) {
    return word.indexOf(letter);
  }
}
