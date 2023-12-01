import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
connectedUser : User | undefined;
constructor(private _auth : AuthService) {}

ngOnInit() :void {
  this._auth.$connectedUser.subscribe({
    next : (value) => {
      this.connectedUser = value;
    },
    
  })
}


}
