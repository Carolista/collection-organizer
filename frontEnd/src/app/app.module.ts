import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    LandingPageComponent,
    MemberPageComponent,
    PageNotFoundComponent,
    AddItemFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
