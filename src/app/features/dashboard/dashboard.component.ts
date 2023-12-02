import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
connectedUser : User | undefined;
constructor(private _auth : AuthService,
  private _router:Router) {}


ngOnInit() :void {
  const storedUser = localStorage.getItem('connectedUser');
  this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
  this._auth.$connectedUser.subscribe({
    next : (value) => {
      this.connectedUser = value;
    },
    
  })
}

disconnect() {
this._auth.logout()
}

}
