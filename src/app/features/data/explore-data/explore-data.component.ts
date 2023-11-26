import {Component, ElementRef, ViewChild} from '@angular/core';
import {FileInfo} from "../../../shared/models/file-info";
import {AfterViewInit} from "@angular/core";


@Component({
  selector: 'app-explore-data',
  templateUrl: './explore-data.component.html',
  styleUrls: ['./explore-data.component.scss']
})
export class ExploreDataComponent  implements AfterViewInit{
    @ViewChild('tableWrapper') tableWrapperRef : ElementRef;

    //TODO Ca marche pas

    data : FileInfo[] = [
    ];
    rowsPerPage: number;

    constructor(private elRef: ElementRef) {
    }

    ngAfterViewInit(){
        setTimeout(() => this.updateRowsPerPage(), 0)
        window.addEventListener('resize', () => this.updateRowsPerPage());
    }

    updateRowsPerPage() {
        // If tableWrapperRef is not available, fall back to the component's native element
        const parentElement = this.tableWrapperRef ? this.tableWrapperRef.nativeElement : this.elRef.nativeElement.parentElement;

        const availableHeight = parentElement.clientHeight;
        const rowHeight = 47
        this.rowsPerPage = Math.floor(availableHeight / rowHeight);
    }

    ngOnInit(){
        console.log('allo')
        for (let i = 0; i < 500; i++){
            this.data.push({name : 'csv'+i, size : Math.floor(Math.random() * 10)});
        }

    }

    test(){
        console.log('test')
    }
}
