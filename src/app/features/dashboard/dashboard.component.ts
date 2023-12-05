import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '@services/api/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
connectedUser : User | undefined;
constructor(private _authService : AuthService,
  private _router:Router) {}


ngOnInit() :void {
  const storedUser = localStorage.getItem('connectedUser');
  this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
  this._authService.$connectedUser.subscribe({
    next : (value) => {
      this.connectedUser = value;
    },

  })
}


}
