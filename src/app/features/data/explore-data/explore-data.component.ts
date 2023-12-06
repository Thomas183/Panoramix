import {Table} from "@models/api/table";
import {TableService} from "@services/api/table.service";
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-explore-data',
    templateUrl: './explore-data.component.html',
    styleUrls: ['./explore-data.component.scss']
})
export class ExploreDataComponent implements OnInit {

    tables: Array<Table>;

    constructor(private _data: TableService) {
    }

    ngOnInit() {
    }
}
