import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MemberPageComponent } from "./member-page/member-page.component";
import { AddItemFormComponent } from "./add-item-form/add-item-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ViewListOfCollectiblesComponent } from './view-list-of-collectibles/view-list-of-collectibles.component';
import { ItemDetailComponent } from './view-list-of-collectibles/item-detail/item-detail.component'

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'member-page', component: MemberPageComponent, children: [
    {path: 'my-collections', component: ViewListOfCollectiblesComponent, children: [
      {path: 'item-detail', component: ItemDetailComponent},
    ]},
    {path: 'add-item', component: AddItemFormComponent}
  ]},
    //put child routes to collections and item detail pages here
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
