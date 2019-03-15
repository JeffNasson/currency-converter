import { Component, OnInit } from '@angular/core';

import {Currency} from '../../models/Currency'
import {CurrencyTypes} from '../../models/CurrencyTypes';
import {CalculatorService} from '../../calculator.service'

@Component({
  selector: 'app-currency-parent',
  templateUrl: './currency-parent.component.html',
  styleUrls: ['./currency-parent.component.css']
})
export class CurrencyParentComponent implements OnInit {
  rates: Currency[]; //the array housing our api response
  url: string; // the original url for our api call
  date: Date; //setting our date value
  currencyValuePairs: CurrencyTypes[] = []; //an array to store the values of currency (sniped from stack overflow)
  currencyCode; // the currencyCode val from CurrencyTypes model
  selectedCurrency: CurrencyTypes = {currencyCode: '', currencyRate: 0} //will pack our selectedCurrency val with the CurrencyTypes model

  updateCurrency(val){
    this.selectedCurrency = this.currencyValuePairs[val] // updates selectedCurrency to the currencyValuePairs value at the specified index 
  }
  
  constructor(private calculatorService: CalculatorService) { }
  
  ngOnInit() {
    this.calculatorService.getExchangeRates()
    .subscribe(
      res => {
        let currencyVals = Object.keys(res['rates']);
        for(let i=0;i < currencyVals.length; i++) {
          this.currencyValuePairs.push(new CurrencyTypes(currencyVals[i], res['rates'][currencyVals[i]]));
          console.log(this.currencyValuePairs)
        }
        this.url = res['base'];
      }
      )


      this.date = this.calculatorService.getDate();
  }

}

