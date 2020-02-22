import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  public profileForm : FormGroup;
  public currentUser: string;
  constructor(private fb: FormBuilder, private router:Router) { 
    this.profileForm = this.fb.group({
      fname : ['', Validators.required],
      lname : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      mobile : ['', Validators.required]
    })
  }

  ngOnInit() {
    if (!JSON.parse(localStorage.getItem('logged-in'))) {
      this.router.navigate(['/register']);
    } else {
      this.currentUser = JSON.parse(localStorage.getItem('current-user'));
      this.profileForm.get('email').setValue(this.currentUser);
      this.getDetails();
    }
  }

  saveDetails() {
    localStorage.setItem(`profile-${this.currentUser}`, JSON.stringify(this.profileForm.value));
    this.router.navigate(['/menu/index']);
  }

  getDetails() {
    const profileData = JSON.parse(localStorage.getItem(`profile-${this.currentUser}`));
    if (profileData) {
      this.profileForm.get('fname').setValue(profileData.fname);
      this.profileForm.get('lname').setValue(profileData.lname);
      this.profileForm.get('email').setValue(profileData.email);
      this.profileForm.get('mobile').setValue(profileData.mobile);
    }
  }

}
