import {Component} from '@angular/core';
import {FileInfo} from "@models/file-info";
import {DataParserService} from "@services/dataParser.service";
import {StructuredCsv} from "@models/strctured-csv";
import {TableService} from "@services/api/table.service";

@Component({
    selector: 'app-import-data',
    templateUrl: './import-data.component.html',
    styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent {
    constructor(private parser: DataParserService, private tableService: TableService) {
    }

    fileInfoList: Array<FileInfo> = [];
    dataToUpload: Array<StructuredCsv> = [];

    // Fonction au chargement d'un fichier, au secours
    onSelect(event: any): void {
        const file: File = event.files[0];

        const reader = new FileReader();
        reader.onload = (e: any) => {
            const text = e.target.result;
            this.parser.parseCsvFile(text, file.name).then(parsedData => {
                if (parsedData) {
                    this.dataToUpload.push(parsedData);
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

    clearFiles() {
        this.fileInfoList = [];
        this.dataToUpload = [];
    }

    onDelete(index: number) {
        this.fileInfoList.splice(index, 1);
        this.dataToUpload.splice(index, 1);
    }

    uploadFiles() {
        this.dataToUpload.forEach((table: StructuredCsv) => {

            let headers: Array<{ name: string, type: string }> = [];
            for (let header of table.headers) {
                headers.push({name: header.name, type: header.type})
            }

            this.tableService.tables.push({
                id: Math.floor(Math.random() * 1000).toString(),
                table: table.tableName,
                headers: headers,
            });
        })
        this.clearFiles();
    }
}
