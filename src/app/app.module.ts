import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QPediaNgLibModule } from '../q-pedia-ng-lib/q-pedia-ng-lib.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, QPediaNgLibModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
