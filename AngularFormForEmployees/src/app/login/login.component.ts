import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(res => {

    }, error => {
      alert('Wrong login or password');
    });
  }



  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
