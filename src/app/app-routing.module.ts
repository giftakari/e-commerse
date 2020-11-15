import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path : '', redirectTo: '/listings', pathMatch: 'full'},
  {
    path: 'listings', component: ListingsPageComponent,
    pathMatch: 'full'
  },
  { path: 'listings/:id', component: ListingDetailsPageComponent ,pathMatch: 'full'},
  { path: 'contact/:id', component: ContactPageComponent },
  { path: 'edit-listing', component: EditListingPageComponent },
  { path: 'my-listings', component: MyListingsPageComponent },
  {path : 'new-listing', component: NewListingPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
