import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public currentRoute: string;
  public pages = [
    {
      title : 'Index',
      url : '/menu/index'
    },
    {
      title : 'Profile',
      url : '/menu/profile' 
    },
    {
      title: 'Logout',
      url: '/menu/logout'
    }
  ]
  constructor(private router: Router) { 
    this.router.events.subscribe((e : RouterEvent) => {
      if (e && e.url) {
        this.currentRoute = e.url;
      }
    })
  }

  ngOnInit() {
  }

}
