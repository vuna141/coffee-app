import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    // if (this.authService.authenticate(this.email, this.password)) {
    //   this.router.navigate(['home']);
    // } else {
    //   alert('Sai email hoac password');
    // }
    this.authService.authenticate(this.email, this.password)
  }

}
