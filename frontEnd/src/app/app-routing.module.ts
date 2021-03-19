import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MemberPageComponent } from "./member-page/member-page.component";
import { AddItemFormComponent } from "./add-item-form/add-item-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'member-page', component: MemberPageComponent},
  {path: 'add-item', component: AddItemFormComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}
]

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}), 
   //"scrollPositionRestortion" allows scroll position on newly loaded page to be reset to top of page)
  ],
  exports: [RouterModule] 
})

export class AppRoutingModule { }
