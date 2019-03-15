import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Currency} from '../../src/app/models/Currency';
import {CurrencyTypes} from '../../src/app/models/CurrencyTypes';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  apiUrl: string ='https://api.exchangeratesapi.io/latest?base=USD'
  
  private date:Date = new Date();
  getDate(){
    return this.date;
  }
  getExchangeRates(): Observable<Currency[]>{
    // console.log(this.http.get('https://api.exchangeratesapi.io/latest?base=USD'))
    return this.http.get<Currency[]>(this.apiUrl);
  }

  constructor(private http:HttpClient) { }
}
