import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '@services/api/auth.service';

@Component({
  selector: 'app-explore-reports',
  templateUrl: './explore-reports.component.html',
  styleUrls: ['./explore-reports.component.scss']
})
export class ExploreReportsComponent {
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
