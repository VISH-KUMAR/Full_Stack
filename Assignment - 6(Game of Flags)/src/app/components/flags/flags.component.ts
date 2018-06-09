import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css',
    '../../../../node_modules/flag-icon-css/css/flag-icon.css'
  ]
})
export class FlagsComponent implements OnInit {
  countryIsoCode = '';
  nationName = '';
  inputName;
  countryArray = [];
  countries;
  result = false;
  score = 0;
  incorrect = 0;
  optionNo = Math.floor(Math.random() * 4);
  game = false;
  gameOver = true;
  increment = 1;
  counter = 0;
  constructor(public cService: CountryServiceService) {
    this.countries = this.cService.getCountryIsoCode();
    this.next();
  }
  startGame() {
    this.game = true;
  }
  resetGame() {
    if (this.game) {
      this.score = 0;
      this.result = false;
      this.incorrect = 0;
      this.next();
      this.game = false;
      this.gameOver = true;
    }
  }
  ngOnInit() {
  }
  next() {
    if (this.incorrect == 4)
      this.gameOver = false;
    else {
      this.countryIso();
      this.changeOptions();
    }
  }
  countryIso() {
    let random = Math.round(Math.random() * 250);
    this.countryIsoCode = this.countries[random]["alpha-2"];
    this.inputName = this.countries[random].name;
    console.log(this.inputName);
  }
  changeOptions() {
    this.countryArray = [];
    for (let i = 0; i < 3; i++) {
      let random = Math.round(Math.random() * 250);
      this.countryArray.push(this.countries[random].name);
    }
    this.countryArray.push(this.inputName);
    this.shuffle(this.countryArray);
  }
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  checkAnswer(id) {

    if (this.inputName === this.countryArray[id]) {
      this.counter++;
      this.result = true;
      this.score += this.increment;
      if (this.score > 3 && this.counter > 3) {
        this.increment++;
      }
    }
    else {
      this.incorrect++;
      this.counter = 0
      this.increment = 1;
    }
    this.next();
  }
  playAgain(){
    this.resetGame();
  }


}
