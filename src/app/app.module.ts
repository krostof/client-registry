import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, HomeModule, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
