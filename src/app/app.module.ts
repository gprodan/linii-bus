import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiniiComponent } from './linii/linii.component';
import { LinieDetailComponent } from './linie-detail/linie-detail.component';

@NgModule({
  declarations: [	
    AppComponent,
      LiniiComponent,
      LinieDetailComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
