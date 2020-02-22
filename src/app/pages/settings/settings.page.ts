import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public location: string;
  public showError: boolean = false;
  public currentUser: string;
  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('current-user'));
    if (!this.currentUser) {
      this.router.navigate(['/register']);
    } else {
      this.location = localStorage.getItem(`location-${this.currentUser}`) !== '' ? 
      JSON.parse(localStorage.getItem(`location-${this.currentUser}`)) : undefined;
    }
  }

  goBack() {
    this.router.navigate(['/menu/index']);
  }

  updateLocation() {
    if (this.location) {
      localStorage.setItem(`location-${this.currentUser}`, JSON.stringify(this.location));
      this.showError = false;
      this.presentAlert();
    } else {
      this.showError = true;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: ' Updated Successfully.',
      buttons: ['Okay']
    });

    await alert.present();
    this.router.navigate(['menu/index']);
  }
}
