import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MemberPageComponent } from "./member-page/member-page.component";
import { AddItemFormComponent } from "./add-item-form/add-item-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ViewListOfCollectiblesComponent } from './view-list-of-collectibles/view-list-of-collectibles.component';
import { ItemDetailComponent } from './item-detail/item-detail.component'
import { AboutTeamComponent } from './landing-page/about-team/about-team.component';
import { AboutProjectComponent } from './landing-page/about-project/about-project.component';
import { MemberAuthenticationComponent } from './member-authentication/member-authentication.component';
//n.b. these routes work until an add-item form is submitted; they stop working at that point because there is no way to update the temporary simulated item array to include the newly added "item" index number; to reset, stop serving the page and re-serve 
const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'member-sign-in', component: MemberAuthenticationComponent},
  {path: 'member-page', component: MemberPageComponent, children: [
    {path: 'my-collections', component: ViewListOfCollectiblesComponent},
    {path: 'add-item', component: AddItemFormComponent},
    {path: ':id', component: ItemDetailComponent},
    {path: '', component: ViewListOfCollectiblesComponent}
  ]},
  {path: 'about-team', component: AboutTeamComponent},
  {path: 'about-project', component: AboutProjectComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  //commented out for now because all '' paths redirecting to page-not-found; fix this later
  {path: '**', redirectTo: '/page-not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
