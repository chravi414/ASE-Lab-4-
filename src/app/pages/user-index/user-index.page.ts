import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.page.html',
  styleUrls: ['./user-index.page.scss'],
})
export class UserIndexPage implements OnInit {
  public profileData : any;
  public location : any;
  public recentSearches: any;
  public recentVenues: any;
  constructor(private router: Router) { 
  }

  ngOnInit() {
    if (!JSON.parse(localStorage.getItem('logged-in'))) {
      this.router.navigate(['/register']);
    } else {
      const currentUser = JSON.parse(localStorage.getItem('current-user'));
      this.profileData = JSON.parse(localStorage.getItem(`profile-${currentUser}`));
      this.location = JSON.parse(localStorage.getItem(`location-${currentUser}`));
      this.recentSearches = JSON.parse(localStorage.getItem(`recent-search-${currentUser}`));
      this.recentVenues = JSON.parse(localStorage.getItem('recent-venue-'+currentUser));
    }
  }

}
