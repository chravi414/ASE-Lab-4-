import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {
  public showRegister: Boolean = true;
  public regForm: FormGroup;
  public loginForm: FormGroup;
  public showGenericErrorMessage: boolean = false;
  public users: any = [];

  constructor(private router: Router, private fb: FormBuilder, public alertController: AlertController) {
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    if (this.router.url.includes('/logout')) {
      localStorage.removeItem('logged-in');
      localStorage.removeItem('current-user');
    }
    this.users = localStorage.getItem('user') ?
          JSON.parse(localStorage.getItem('user')) : []
  } 

  doLogin() {
    if (!this.loginForm.valid) {
      this.presentAlert('Please enter all the details');
    } else {
      const users = JSON.parse(localStorage.getItem('user'));
      const matched = users.find(u => {
        return u.email === this.loginForm.value.email && u.password === this.loginForm.value.password
      })
      if (matched) {
        localStorage.setItem('logged-in', JSON.stringify(true));
        localStorage.setItem('current-user', JSON.stringify(this.loginForm.value.email));
        this.router.navigate(['/menu/index/settings']);
      } else {
        this.presentAlert('No user matched');
      }
    }
  }

  doRegister() {
    if (!this.regForm.valid) {
      this.presentAlert('Please enter all the details');
    } else {
      this.users.push(this.regForm.value);
      localStorage.setItem('user', JSON.stringify(this.users));
      localStorage.setItem('logged-in', JSON.stringify(true));
      localStorage.setItem('current-user', JSON.stringify(this.regForm.value.email));
      this.router.navigate(['/menu/index/settings'])
    }
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['Okay']
    });

    await alert.present();
  }

}
