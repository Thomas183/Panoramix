import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '@services/api/auth.service';
import { ReportService } from '@services/api/report.service';
import { Report } from '@models/api/report';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.scss']
})
export class MyReportsComponent {
  connectedUser : User | undefined;


  listReports: any[] =[];


  constructor(private _authService: AuthService,
              private _reportService : ReportService,
              private _routeur : Router) { }

  ngOnInit() :void {
      const storedUser = localStorage.getItem('connectedUser');
      this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
      this._authService.$connectedUser.subscribe({
        next : (value) => {
          this.connectedUser = value;
          console.log(this.connectedUser)
        },
      })
 
      //obj : afficher les rapports et récupérer l'id qd on clique dessus
      //rajouter des pages et updater le numéro de la page pr afficher les autres dossiers
      let page : number = 0;
      let size : number = 10;
      this._reportService.getReports(page, size).subscribe({
        next:(goldorak) => {
            this.listReports=goldorak.data
            console.log(goldorak.data[9].id)
            console.log("Rapports récupérés")
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
