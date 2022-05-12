import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NgForm} from '@angular/forms';
import {User} from '../models/user.model';
import {UserRepositoryService} from '../services/user-repository.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  userEmail: string;
  user: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userRepo: UserRepositoryService
  ) {
    this.user = this.userRepo.getUserById(this.authService.userDetails().uid);
  }

  ngOnInit() {

    /*
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
        //this.user = new User();
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })
    */

  }

  /*
  logout() {
    this.authService.logout()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
  */


  save(form: NgForm) {
    this.userRepo.updateUser(this.user);
  }

  addImageToUser(imageUrl: string) {
    console.log('adding new image url to user', imageUrl);
    this.user.imageUrl = imageUrl;
  }
}
