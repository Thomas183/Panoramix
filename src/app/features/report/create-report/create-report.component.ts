import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {

  connectedUser : User | undefined;
  errorMsg : string = '';
  userSub : Subscription = new Subscription();

  constructor(private _authService : AuthService) {}
  
  ngOnInit(): void {
    const storedUser = localStorage.getItem('connectedUser');
    this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
    this._authService.$connectedUser.subscribe({
      next : (value) => {
        this.connectedUser = value;
        console.log(this.connectedUser)
      },
      
    })}

}
