import {
    AfterViewInit,
    Component,
    ElementRef, OnDestroy,
    OnInit,
    QueryList,
    Renderer2,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {StructuredCsv} from "../../../../shared/models/strctured-csv";
import {Table} from "primeng/table";
import {TableLink} from "../../../../shared/models/table-link";
import { DataService } from "../../../../shared/services/data.service";


declare var LeaderLine: any;

@Component({
    selector: 'app-edit-schematic',
    templateUrl: './edit-schematic.component.html',
    styleUrls: ['./edit-schematic.component.scss']
})

export class EditSchematicComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren('tableRef') tableRefs: QueryList<Table>;
    tablesArray: Array<Table>;
    tableClicked: number | undefined;

    lines: Array<{ link: TableLink, line: LeaderLine }> = [];

    constructor(dataService : DataService) {
        this.data = dataService.fakeData;
    }

    ngAfterViewInit() {
        this.tablesArray = this.tableRefs.toArray();
    }

    ngOnDestroy() {
        this.deleteAllLines();
    }


    drawNewLine(tableIndex: number) {
        console.log(tableIndex)
        // Premier click
        if (this.tableClicked === undefined) {
            this.tableClicked = tableIndex;
            return;
        } else if (tableIndex === this.tableClicked) { //Deux fois le même cliqué
            this.tableClicked = undefined;
            return;
        } else { // Liaison de deux tableaux
            const line: LeaderLine = new LeaderLine(
                this.tablesArray[this.tableClicked].el.nativeElement,
                this.tablesArray[tableIndex].el.nativeElement,
                {
                    path: 'straight',
                    startPlug: 'behind',
                    endPlug: 'behind',
                    color: '#2196F3',
                },
            )

            this.lines.push(
                {
                    link: {
                        from: this.tablesArray[this.tableClicked].el.nativeElement.id,
                        to: this.tablesArray[tableIndex].el.nativeElement.id,
                    },
                    line: line,
                }
            )
            this.tableClicked = undefined;
        }
    }

    deleteLine(line: { link: TableLink, line: LeaderLine }) {
        line.line.remove();
        this.lines = this.lines.filter((link) =>
              link.link.from !== line.link.from || link.link.to !== line.link.to
        );
    }

    deleteAllLines() {
        this.lines.forEach((line) => {
            line.line.remove();
        })
    }

    recalculateLine(index: number) {
        this.lines.forEach((line) => {
            line.line.position();
        })
    }

    ngOnInit() {
    }

    data: Array<StructuredCsv>
}
