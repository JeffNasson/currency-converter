import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyParentComponent } from './components/currency-parent/currency-parent.component';
import { GraphsParentComponent } from './components/graphs-parent/graphs-parent.component';
import {CalculatorService} from '../app/calculator.service';
import { CurrencyLogicComponent } from './components/currency-logic/currency-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyParentComponent,
    GraphsParentComponent,
    CurrencyLogicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
