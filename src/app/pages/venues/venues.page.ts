import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})
export class VenuesPage implements OnInit {
  public url = `https://api.foursquare.com/v2/venues/search?near=`;
  private client_id = 'SHZF52TPFY5VT5V05Z5AWN20G41XJH3ZNJJQSUJZBXCKJI4M';
  private client_secret ='CQVA4T02UPZW5POC3L2CMOO3303URLOSK0VIPZHX0OSRI045'; 
  public showMessage : boolean = false;
  public venues : any = [];
  public city :string;
  public currentUser: string;
  public userDefaultLocation: string;
  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('current-user'));
    if (!this.currentUser) {
      this.router.navigate(['/register']);
    } else {
      this.userDefaultLocation = JSON.parse(localStorage.getItem(`location-${this.currentUser}`));
      this.getVenues();
    }
  }

  goBack() {
    this.router.navigate(['/menu/index']);
  }

  public getVenues() {
    this.userDefaultLocation = this.city ? this.city : this.userDefaultLocation;
    if (this.userDefaultLocation) {
      this.showMessage = false;
      const venueUrl = `${this.url}${this.userDefaultLocation}&client_id=${this.client_id}&client_secret=${this.client_secret}&v=20200221&limit=5`;
      console.log(venueUrl);
      this.http.get(venueUrl).
        subscribe(data => {
          data['response']['venues'].forEach(v => {
            const object = {
              name : v['name'],
              address : v['location']['formattedAddress'],
              catName : v['categories'][0]['name']
            };
            this.venues.push(object);
            localStorage.setItem(`recent-venue-${this.currentUser}`, JSON.stringify(this.venues[this.venues.length - 1]));
          })
      })
    } else {
      this.showMessage = true;
    }
  }

  public resetVenues() {
    this.venues = [];
  }

}
