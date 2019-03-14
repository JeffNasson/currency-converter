import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyParentComponent } from './components/currency-parent/currency-parent.component';
import { GraphsParentComponent } from './components/graphs-parent/graphs-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyParentComponent,
    GraphsParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
