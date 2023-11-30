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

  constructor(private _auth : AuthService) {}
  
  ngOnInit(): void {
    this.userSub = this._auth.$connectedUser.subscribe({
      next : (value) => {
        this.connectedUser = value;
        console.log("NEXT IN DEMO : ", value);
      }
    })
    
}

}
