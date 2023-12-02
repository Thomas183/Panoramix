import { Component } from '@angular/core';
import {FileInfo} from "../../../shared/models/file-info";
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent {
    uploadedFiles : Array<FileInfo> = [];
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



    onLoad(event : any): void {
        const file: File = event.files[0];
        this.uploadedFiles.push(
            {
                name : file.name,
                size : file.size,
            }
        )
    }
    clearFiles(){
        this.uploadedFiles = [];
    }

    onDelete(index : number){
        this.uploadedFiles.splice(index, 1);
    }

    uploadFiles(){
        this.uploadedFiles.forEach(file => {
            console.log(file.name, ' envoyé')
        })
    }
}
