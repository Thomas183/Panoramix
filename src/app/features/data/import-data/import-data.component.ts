import { Component } from '@angular/core';
import { FileInfo } from "../../../shared/models/file-info";
import { DataParserService } from "../../../shared/services/dataParser.service";
import { StructuredCsv } from "../../../shared/models/strctured-csv";

@Component({
    selector: 'app-import-data',
    templateUrl: './import-data.component.html',
    styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent {
    constructor(private parser: DataParserService) {}

    fileInfoList : Array<FileInfo> = [];
    dataToUpload : Array<StructuredCsv> = [];

    // Fonction au chargement d'un fichier, au secours
    onSelect(event: any): void {
        const file: File = event.files[0];

        const reader = new FileReader();
        reader.onload = (e: any) => {
            const text = e.target.result;
            this.parser.parseCsvFile(text, file.name).then(parsedData => {
                if (parsedData) {
                    this.dataToUpload.push(parsedData);
                    console.log('Data to Upload:', this.dataToUpload);
                }
            }).catch(error => {
                console.error('Error during file processing', error);
            });
        };

        reader.onerror = (error) => {
            console.error('Error reading file:', error);
        };

        reader.readAsText(file);

        this.fileInfoList.push({
            name: file.name,
            size: file.size,
        });
    }

    clearFiles(){
        this.fileInfoList = [];
    }

    onDelete(index : number){
        this.fileInfoList.splice(index, 1);
        this.dataToUpload.splice(index, 1);
        console.log(this.dataToUpload);
    }

    uploadFiles(){}
}
