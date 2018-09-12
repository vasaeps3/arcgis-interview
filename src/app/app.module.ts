import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArcgisMapComponent } from './arcgis-map/arcgis-map.component';


@NgModule({
  declarations: [
    AppComponent,
    ArcgisMapComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
