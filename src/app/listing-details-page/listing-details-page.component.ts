import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake.data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-details-page',
  templateUrl: './listing-details-page.component.html',
  styleUrls: ['./listing-details-page.component.css']
})
  
export class ListingDetailsPageComponent implements OnInit {
  listing: Listing ;
  

  constructor(private router: ActivatedRoute) { };
  
 
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.listing = fakeListings.find(listing => listing.id ===id) ;
   

    console.log(this.listing)

  }

}
