import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CitiesComponent } from './cities/cities.component';
import { AreasComponent } from './areas/areas.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentInfoComponent } from './apartment-info/apartment-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CitiesComponent,
    AreasComponent,
    ApartmentsComponent,
    ApartmentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
