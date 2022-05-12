import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {UserRepositoryService} from '../services/user-repository.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  user: User;
  name: string;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ],
    'fullName': [
      { type: 'required', message: 'Full name is required.' },
    ]
  };

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private repository: UserRepositoryService ) {
  }

  ngOnInit() {
    this.user = new User();

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      fullName: new FormControl(this.name, Validators.compose([
        Validators.required
      ])),
    });
  }

  tryRegister(value) {
    // TODO make automatic
    this.user.email = value.email;
    this.user.fullName = value.fullName;

    this.authService.register(value.email, value.password)
      .then(res => {
        console.log(res);
        this.user.id = res.user.uid;
        this.repository.saveUser(this.user);
        this.errorMessage = "";
        this.successMessage = 'Your account has been created. Please log in.';
        //this.router.navigate(['user-details']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }
}
