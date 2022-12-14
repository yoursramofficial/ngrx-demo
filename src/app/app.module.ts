import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter-reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
