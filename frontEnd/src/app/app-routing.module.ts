import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MemberPageComponent } from "./member-page/member-page.component";
import { AddItemFormComponent } from "./add-item-form/add-item-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ViewListOfCollectiblesComponent } from './view-list-of-collectibles/view-list-of-collectibles.component';
import { ItemDetailComponent } from './item-detail/item-detail.component'

//n.b. these routes work until an add-item form is submitted; they stop working at that point because there is no way to update the temporary simulated item array to include the newly added "item" index number; to reset, stop serving the page and re-serve 
const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'member-page', component: MemberPageComponent, children: [
    {path: 'my-collections', component: ViewListOfCollectiblesComponent},
    {path: 'add-item', component: AddItemFormComponent},
    {path: ':id', component: ItemDetailComponent},
    {path: '', component: ViewListOfCollectiblesComponent}
  ]},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
