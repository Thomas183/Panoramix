import {Component, OnInit} from '@angular/core';
import {Table} from "@models/api/table";
import {TableService} from "@services/api/table.service";
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FileInfo} from "../../../shared/models/file-info";
import {AfterViewInit} from "@angular/core";
import {User} from 'src/app/shared/models/user';
import {AuthService} from 'src/app/shared/services/auth.service';


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
        const storedUser = localStorage.getItem('connectedUser');
        this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
        this._authService.$connectedUser.subscribe({
            next: (value) => {
                this.connectedUser = value;
                console.log(this.connectedUser)
            },
        })
    }
}
