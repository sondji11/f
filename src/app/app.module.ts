import { ClientRoutingModule } from './client/client-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutClientModule } from './client/layout-client/layout-client.module';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LayoutClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
