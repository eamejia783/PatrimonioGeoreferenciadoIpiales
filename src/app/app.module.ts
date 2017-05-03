import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { MapComponent } from './map/map.component';
import { SliderComponent } from './slider/slider.component';
//import google maps
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ParallaxComponent,
    MapComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXze2dBhpQtlXXlFNXQ07L_qpmePTq_fU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
