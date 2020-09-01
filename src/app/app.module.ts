import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './inmemorydata.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiniiComponent } from './linii/linii.component';
import { LinieDetailComponent } from './linie-detail/linie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinieSearchComponent } from './linie-search/linie-search.component';

@NgModule({
  declarations: [
    AppComponent,
      LiniiComponent,
      LinieDetailComponent,
      MessagesComponent,
      DashboardComponent,
      LinieSearchComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
