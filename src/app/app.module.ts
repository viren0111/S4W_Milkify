import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapbarComponent } from './Components/tapbar/tapbar.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TapbarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
