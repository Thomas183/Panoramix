import { Component } from '@angular/core';
import { User } from '@models/api/users';
import { AuthService } from '@services/api/auth.service';

@Component({
  selector: 'app-explore-reports',
  templateUrl: './explore-reports.component.html',
  styleUrls: ['./explore-reports.component.scss']
})
export class ExploreReportsComponent {
  connectedUser : User | undefined;

  constructor(private _authService: AuthService) { }

}
