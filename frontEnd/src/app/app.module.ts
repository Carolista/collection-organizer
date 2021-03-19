import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberPageComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
