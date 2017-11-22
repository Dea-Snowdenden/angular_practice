import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikeService } from './bike.service';
import { BikeComponent } from './bike/bike.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule,  MdList, MdListItem } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BikeInfoComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule, 
    AppRoutingModule.forRoot()

  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
