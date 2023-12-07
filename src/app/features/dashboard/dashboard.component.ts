import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/api/users';
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

}
