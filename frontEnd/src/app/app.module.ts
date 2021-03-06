import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewListOfCollectiblesComponent } from './view-list-of-collectibles/view-list-of-collectibles.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AboutTeamComponent } from './landing-page/about-team/about-team.component';
import { AboutProjectComponent } from './landing-page/about-project/about-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewListOfCollectiblesComponent,
    NavbarHeaderComponent,
    LandingPageComponent,
    MemberPageComponent,
    PageNotFoundComponent,
    AddItemFormComponent,
    FooterComponent,
    ItemDetailComponent,
    AboutTeamComponent,
    AboutProjectComponent,
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
