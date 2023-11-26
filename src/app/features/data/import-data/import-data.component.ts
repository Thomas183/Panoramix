import { Component } from '@angular/core';
import {FileInfo} from "../../../shared/models/file-info";

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent {
    uploadedFiles : Array<FileInfo> = [];
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
