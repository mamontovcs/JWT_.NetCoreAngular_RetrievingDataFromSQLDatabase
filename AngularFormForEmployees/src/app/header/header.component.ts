import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  public get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  logout() {
    this.authService.logout();
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }
}
