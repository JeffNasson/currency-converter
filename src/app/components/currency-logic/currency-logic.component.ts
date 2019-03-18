import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../models/Country';
import { CountryCodeService } from '../../country-details.service';
import {CurrencyTypes} from '../../models/CurrencyTypes';


@Component({
  selector: 'app-currency-logic',
  templateUrl: './currency-logic.component.html',
  styleUrls: ['./currency-logic.component.css']
})
export class CurrencyLogicComponent implements OnInit {
  public privatePassedInCurrency:CurrencyTypes = {currencyCode:'', currencyRate:0};
  public countryDetails: Country[] = [];
  public currencyDetails = {name:''};
  

  @Input() 
  set passedInCurrency(value: CurrencyTypes) {
    // console.log(value)
    if(value.currencyCode !== '') { //if the value of currencyCode is not blank, push that code
      this.privatePassedInCurrency = value;
      this.countryCodeService.getDetailFromCountryCode(this.privatePassedInCurrency['currencyCode']) //a loop function zombified from stack, calls the service to make an api call. then take the response and sets currencyDetails to res[index0]. Then loops through the res and pushes the matches to countryDetails
        .subscribe(
          res => {
            this.currencyDetails = res[0]['currencies'][0];
            for(let i = 0; i < res.length; i++) {
              this.countryDetails.push(res[i]);
            }
          }
          )
        }
    }
      
  get passedInCurrency():CurrencyTypes {
    return this.privatePassedInCurrency;
  }
  
  constructor(private countryCodeService:CountryCodeService) { }
  
  ngOnInit() {
    
  }


}