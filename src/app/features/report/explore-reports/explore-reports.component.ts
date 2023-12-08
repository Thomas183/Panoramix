import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '@services/api/auth.service';
import { ReportService } from '@services/api/report.service';
import { Report } from '@models/api/report';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-reports',
  templateUrl: './explore-reports.component.html',
  styleUrls: ['./explore-reports.component.scss']
})
export class ExploreReportsComponent {
  connectedUser : User | undefined;
  listReports: Report[] =[];

  constructor(private _authService: AuthService,
              private _reportService : ReportService,
              private _routeur : Router,
    ) { }

  ngOnInit() :void {
      const storedUser = localStorage.getItem('connectedUser');
      this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
      this._authService.$connectedUser.subscribe({
        next : (value) => {
          this.connectedUser = value;
          console.log(this.connectedUser)
        },
      })

      let page : number = 0;
      let size : number = 30;

      this._reportService.getReports(page, size).subscribe({
        next:(johnCena) => {
          this.listReports=johnCena.data
        }
      })
    }

    quoicoubeh(id:string) {
      console.log("les cramptés")
      //quelle est la route pr renvoyer vers l'édition de ce rapport en particulier
      this._routeur.navigate(['/report/editReport']);
      //TODO TOHMAS CHIEN RUE FAIS TON TRAVAIL
    }
}
