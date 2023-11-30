import {Component, ElementRef, ViewChild} from '@angular/core';
import {FileInfo} from "../../../shared/models/file-info";
import {AfterViewInit} from "@angular/core";
import {Table} from "../../../shared/models/table";
import {DataService} from "../../../shared/services/data.service";


@Component({
  selector: 'app-explore-data',
  templateUrl: './explore-data.component.html',
  styleUrls: ['./explore-data.component.scss']
})
export class ExploreDataComponent  implements AfterViewInit{
    @ViewChild('tableWrapper') tableWrapperRef : ElementRef;

    //TODO Ca marche pas

    tables : Array<Table>;

    constructor(private _data: DataService) {
        this.tables = this._data.tables;
    }

    ngAfterViewInit(){

    }

    ngOnInit(){
    }
}
