import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
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
