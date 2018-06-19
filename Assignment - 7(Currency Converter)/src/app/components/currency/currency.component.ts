import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencies = [];
  inputCurrency = {
    currency: 1,
    currency1: 1,
    currency2: 1,
    currency3: 1
  }
  selectCurrency = {
    selectedCurrency: 'USD',
    selectedCurrency1: 'USD',
    selectedCurrency2: 'USD',
    selectedCurrency3: 'USD'
  }
  changeIn = 'USD';
  base = 'USD';
  changeBaseCurrency;
  rates;
  result = 1;
  currency1;
  url = 'https:/exchangeratesapi.io/api/latest?base=';
  constructor(
    private http: HttpClient
  ) { }
  ngOnInit() {
    this.getDetails(this.base);
    this.currency1 = this.base;
  }
  getDetails(base) {
    this.http.get(this.url + base).subscribe(
      (value: any) => {
        console.log(value.rates);
        this.currencies = Object.keys(value.rates);
        this.rates = value.rates;
        //console.log(this.rates.INR)
        //this.currency2 = this.currency1 * value.rates.BRL;

      });
  }
  onChangeTo(currency) {
    console.log(currency);
    this.getDetails(currency);
  }
  onChangeIn(currency) {
    console.log(currency);
    console.log(this.inputCurrency.currency);
    console.log(this.rates[currency])
    this.currency1 = currency;
    this.KeyPress();
  }
  KeyPress() {
    this.result = this.inputCurrency.currency * this.rates[this.currency1];
  }
  onChange1(currency) {
    this.selectCurrency.selectedCurrency1 = currency;
   // this.changeInInput23();
  }
  onChange2(currency) {
    this.selectCurrency.selectedCurrency2 = currency;
   // this.changeInInput23();
  }
  onChange3(currency) {
    this.selectCurrency.selectedCurrency3 = currency;
    //this.changeInInput23();
  }
  firstInput() {
    this.inputCurrency.currency1 = 1
    this.getDetails(this.selectCurrency.selectedCurrency1);
    this.changeInInput23();
  }
  secondInput() {
    this.inputCurrency.currency2 = 1
    this.getDetails(this.selectCurrency.selectedCurrency2);
    this.changeInInput13();
  }
  thirdInput() {
    this.inputCurrency.currency3 = 1
    this.getDetails(this.selectCurrency.selectedCurrency3);
    this.changeInInput12();
  }
  changeInInput23() {
    this.inputCurrency.currency2 = this.inputCurrency.currency1 * this.rates[this.selectCurrency.selectedCurrency2];
    this.inputCurrency.currency3 = this.inputCurrency.currency1 * this.rates[this.selectCurrency.selectedCurrency3];
  }
  changeInInput13() {
    this.inputCurrency.currency1 = this.inputCurrency.currency2 * this.rates[this.selectCurrency.selectedCurrency1];
    this.inputCurrency.currency3 = this.inputCurrency.currency2 * this.rates[this.selectCurrency.selectedCurrency3];
  }
  changeInInput12() {
    this.inputCurrency.currency1 = this.inputCurrency.currency3 * this.rates[this.selectCurrency.selectedCurrency1];
    this.inputCurrency.currency2 = this.inputCurrency.currency3 * this.rates[this.selectCurrency.selectedCurrency2];
  }
}
