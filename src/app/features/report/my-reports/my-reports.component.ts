import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.scss']
})
export class MyReportsComponent {
  connectedUser : User | undefined;

  constructor(private _authService: AuthService) { }
  
  ngOnInit() :void {
      const storedUser = localStorage.getItem('connectedUser');
      this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
      this._authService.$connectedUser.subscribe({
        next : (value) => {
          this.connectedUser = value;
          console.log(this.connectedUser)
        },
        
      })
    }
}
