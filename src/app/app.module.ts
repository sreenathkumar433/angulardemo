import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ActorServiceService} from './actor-service.service';


@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
