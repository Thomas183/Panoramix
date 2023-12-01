import {
    AfterViewInit,
    Component,
    OnDestroy,
    QueryList,
    ViewChildren
} from '@angular/core';
import {Table} from "primeng/table";
import {Table as apiTable} from '../../../../shared/models/table'
import {TableLink} from "../../../../shared/models/table-link";
import {DataService} from "../../../../shared/services/data.service";
import {ApiSchematicResponse, Header} from "../../../../shared/models/api-schematic-response";
import {Messages} from "primeng/messages";
import {Message, MessageService} from "primeng/api";


declare var LeaderLine: any;

@Component({
    selector: 'app-edit-schematic',
    templateUrl: './edit-schematic.component.html',
    styleUrls: ['./edit-schematic.component.scss'],
    providers: [MessageService],
})

export class EditSchematicComponent implements AfterViewInit, OnDestroy {
    @ViewChildren('tableRef') tableRefs: QueryList<Table>;
    tablesArray: Array<Table>;
    firstTableClicked: number | undefined;
    lines: Array<{ link: TableLink, line: LeaderLine }> = [];
    tables: Array<apiTable>;
    schematics: Array<ApiSchematicResponse>;

    warningMessages: Message[];
    warningMessagesToDisplay: Message[] = [];

    constructor(private dataService: DataService, private messageService: MessageService) {
        this.tables = this.dataService.tables;
        this.schematics = this.initializeSchematics(this.tables);
        this.loadLinks();

        this.warningMessages = [
            {severity: 'warn', summary: 'Attention', detail: 'Le lien existe déjà'}, // 0
            {severity: 'warn', summary: 'Attention', detail: 'Impossible de lier un tableau à lui même'}, // 1
            {severity: 'warn', summary: 'Attention', detail: 'Un lien doit toujours démarrer d\'une table de fait'}, // 2
        ]

    }

    ngAfterViewInit(): void {
        this.tablesArray = this.tableRefs.toArray();
    }

    ngOnDestroy(): void {
        this.deleteAllLines();
    }

    initializeSchematics(tables: Array<apiTable>): Array<ApiSchematicResponse> {
        const schematics: Array<ApiSchematicResponse> = []
        tables.forEach((table) => {
            const headers: Array<Header> = [];
            for (let header of table.headers) {
                headers.push({
                    fk: null,
                    pk: false,
                    ...header
                })
            }
            schematics.push({
                id: Math.random().toString(),
                log: {
                    "createdAt": "2019-08-24T14:15:22.000Z",
                    "createdBy": "user@example.com",
                    "updatedAt": "2019-08-24T14:15:22.000Z",
                    "updatedBy": "user@example.com"
                },
                fact: false,
                coord: {
                    x: 0,
                    y: 0,
                },
                table: table.table,
                headers: headers,
            })
        })
        return schematics;
    }

    displayWarningMessage(id: number) {
        this.messageService.add(this.warningMessages[id]);
        setTimeout(() => {
            this.messageService.clear();
        }, 3500);
    }

    getLinkedHeaders(): void {

    }

    doesLinkExist(inputLink: TableLink): boolean {
        return this.lines.some(link =>
            (link.link.from === inputLink.from && link.link.to === inputLink.to) ||
            (link.link.from === inputLink.to && link.link.to === inputLink.from)
        );
    }

    loadLinks(): void {
        this.schematics.forEach((schematic: ApiSchematicResponse, i: number) => {
            console.log(schematic.fact, schematic.headers[0].fk);
            if (!schematic.fact && schematic.headers[0].fk) {
                this.drawNewLine(i, this.getSchematicIdByName(schematic.headers[0].fk.table));
            }
        })
    }

    test(): void {
        this.displayWarningMessage(1)
    }

    getSchematicIdByName(name: string): number {
        return this.schematics.findIndex((schematic) => schematic.table === name);
    }

    handleTableClick(tableClickedIndex: number) {

        // Premier clic
        if (this.firstTableClicked === undefined) {
            if (this.schematics[tableClickedIndex].fact) {
                this.firstTableClicked = tableClickedIndex;
                return
            }
            if (!this.schematics[tableClickedIndex].fact) {
                this.displayWarningMessage(2);
                return;
            }
        }

        // Deuxième click
        if (this.firstTableClicked !== undefined) {
            if (tableClickedIndex === this.firstTableClicked) {
                this.firstTableClicked = undefined;
                this.displayWarningMessage(1);
                return;
            }
        }

        // Pas d'erreur -> création du lien;
        this.drawNewLine(tableClickedIndex)
        this.firstTableClicked = undefined;

    }

    drawNewLine(tableIndex: number, firstTableIndex?: number) {
        let sourceTable: number;
        if (firstTableIndex) {
            sourceTable = firstTableIndex
        } else {
            sourceTable = this.firstTableClicked;
        }

        const line: LeaderLine = new LeaderLine(
            this.tablesArray[sourceTable].el.nativeElement,
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
                    from: this.tablesArray[sourceTable].el.nativeElement.id,
                    to: this.tablesArray[tableIndex].el.nativeElement.id,
                },
                line: line,
            }
        )
    }

    deleteLine(line: { link: TableLink, line: LeaderLine }) {
        line.line.remove();
        this.lines = this.lines.filter((link) =>
            link.link.from !== line.link.from || link.link.to !== line.link.to
        );
    }

    deleteAllLines(): void {
        this.lines.forEach((line) => {
            line.line.remove();
        })
    }

    recalculateLine(): void {
        this.lines.forEach((line) => {
            line.line.position();
        })
    }

}
