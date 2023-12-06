import { Component } from '@angular/core';
import { User } from '@models/api/users';
import { AuthService } from '@services/api/auth.service';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.scss']
})
export class MyReportsComponent {
  connectedUser : User | undefined;

  constructor(private _authService: AuthService) { }

}
