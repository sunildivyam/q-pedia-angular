import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QPediaLibModule } from '../q-pedia-lib/q-pedia-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QPediaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
