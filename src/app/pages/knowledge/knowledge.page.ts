import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.page.html',
  styleUrls: ['./knowledge.page.scss'],
})
export class KnowledgePage implements OnInit {
  public url = `https://kgsearch.googleapis.com/v1/entities:search?query=`;
  public access_key = 'AIzaSyCk_E7BCkT2CX0_bgtr6-lc4KgimAY4NWU';
  public showMessage : boolean = false;
  public keyword: string;
  public knowledgeData: any = [];
  public currentUser: string;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('current-user'));
  }

  goBack() {
    this.router.navigate(['/menu/index']);
  }

  getDetails() {
    if (this.keyword) {
      this.showMessage = false;
      const url = `${this.url}${this.keyword}&key=${this.access_key}&limit=3&indent=True`;
      this.http.get(url).
        subscribe(data => {
          data['itemListElement'].forEach(d => {
            const object = {
              name : d['result']['name'],
              type : d['result']['description'],
              desc : d['result']['detailedDescription']['articleBody']
            };
            this.knowledgeData.push(object);
            localStorage.setItem(`recent-search-${this.currentUser}`, JSON.stringify(this.knowledgeData[this.knowledgeData.length - 1]));
          });
      })
    } else {
      this.knowledgeData = [];
      this.showMessage = true;
    }
  }

}
