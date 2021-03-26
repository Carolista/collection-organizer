import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MemberPageComponent } from "./member-page/member-page.component";
import { AddItemFormComponent } from "./add-item-form/add-item-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ViewListOfCollectiblesComponent } from './view-list-of-collectibles/view-list-of-collectibles.component';
import { ItemDetailComponent } from './item-detail/item-detail.component'

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'member-page', component: MemberPageComponent, children: [
    {path: 'my-collections', component: ViewListOfCollectiblesComponent},
    {path: ':id', component: ItemDetailComponent},
    {path: 'add-item', component: AddItemFormComponent},
    {path: '', component: ViewListOfCollectiblesComponent}
  ]},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}
]
/* const appRoutes: Routes = [
    {path: '', redirectTo: '/recipe-book', pathMatch: 'full'},
    {path: 'recipe-book', component: RecipeBookComponent, canActivate:[AuthGuard], children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'auth', component: AuthComponent}
]*/

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
