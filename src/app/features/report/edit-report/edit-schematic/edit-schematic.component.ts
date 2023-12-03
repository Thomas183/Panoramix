import {
    AfterViewInit,
    Component,
    OnDestroy, OnInit,
    QueryList,
    ViewChildren
} from '@angular/core';
import {Table} from "primeng/table";
import {Table as apiTable} from '../../../../shared/models/table'
import {DataService} from "../../../../shared/services/data.service";
import {ApiSchematicResponse, Header} from "../../../../shared/models/api-schematic-response";
import {Messages} from "primeng/messages";
import {Message, MessageService} from "primeng/api";
import {Observable, of} from "rxjs";
import {el} from "@fullcalendar/core/internal-common";


declare var LeaderLine: any;

interface TableLink {
    from: string,
    to: string,
}

@Component({
    selector: 'app-edit-schematic',
    templateUrl: './edit-schematic.component.html',
    styleUrls: ['./edit-schematic.component.scss'],
    providers: [MessageService],
})

export class EditSchematicComponent implements AfterViewInit, OnDestroy, OnInit {
    /*
     /\
    /  \     _   _     ___    ___    ___    ___    _   _   _ __   ___
   / /\ \   | | | |   / __|  / _ \  / __|  / _ \  | | | | | '__| / __|
  / ____ \  | |_| |   \__ \ |  __/ | (__  | (_) | | |_| | | |    \__ \
 /_/    \_\  \__,_|   |___/  \___|  \___|  \___/   \__,_| |_|    |___/
     */



}

// // Récupération des éléments HTML des tableaux
// @ViewChildren('tableRef') tableRefs: QueryList<Table>;
// tableElementsArray: Array<Table>;
// // Array de table récupérés à la création du projet
// tables: Array<apiTable>;
// // Mémoire temporaire du premier tableau cliqué
// firstTableClicked: number | undefined;
//
// // Array contenant des arrays de string représentant les headers de chaque tableau
// selectedHeader: Array<{ link: TableLink | undefined, header: string | undefined }[]> = [];
//
// // Array d'objets avec les informations des liens et l'objet LeaderLine qui s'y rapporte
// lines: Array<{ link: TableLink, line: LeaderLine }> = [];
//
// // Array des tableaux et de leur relations, ils représentent ensemble le schéma
// schematics: Array<ApiSchematicResponse>;
//
// // Array des messages pouvant être affichés
// messages: Array<Message> = [
//     {severity: 'warn', summary: 'Attention', detail: 'Le lien existe déjà'}, // 0
//     {severity: 'warn', summary: 'Attention', detail: 'Impossible de lier un tableau à lui même'}, // 1
//     {severity: 'warn', summary: 'Attention', detail: 'Un lien doit démarrer d\'une table de fait'}, // 2
//     {severity: 'warn', summary: 'Attention', detail: 'Impossible de lier deux tables de fait ensemble'}, // 3
// ];
// // Array des messages actuellement affichés à l'écran
// messagesToDisplay: Message[] = [];
//
// constructor(private dataService: DataService, private messageService: MessageService) {
//     this.tables = this.dataService.tables;
//     this.schematics = this.initializeSchematics(this.tables);
//     this.loadLinks();
//
//     this.schematics.forEach((schematic, i) => {
//         this.selectedHeader.push([]);
//         for (let header in schematic.headers) {
//             this.selectedHeader[i].push({header: undefined, link: undefined});
//         }
//     })
// }
//
// ngAfterViewInit(): void {
//     this.tableElementsArray = this.tableRefs.toArray();
// }
//
// ngOnDestroy(): void {
//     this.deleteAllLines();
// }
//
// initializeSchematics(tables: Array<apiTable>): Array<ApiSchematicResponse> {
//     const schematics: Array<ApiSchematicResponse> = []
// tables.forEach((table) => {
//     const headers: Array<Header> = [];
//     for (let header of table.headers) {
//         headers.push({
//             fk: null,
//             pk: false,
//             ...header
//         })
//     }
//     schematics.push({
//         id: Math.random().toString(),
//         log: {
//             // TODO add connected user
//             "createdAt": new Date().toISOString(),
//             "createdBy": "user@example.com",
//             "updatedAt": new Date().toISOString(),
//             "updatedBy": "user@example.com"
//         },
//         fact: false,
//         coord: {
//             x: 0,
//             y: 0,
//         },
//         table: table.table,
//         headers: headers,
//     })
// })
// return schematics;
// }
//
// displayMessage(id: number): void {
//     this.messageService.add(this.messages[id]);
//     setTimeout(() => {
//     this.messageService.clear(id.toString());
// }, 3500);
// }
//
// getLinkedHeaders(sourceTable: number): Observable<{ link: TableLink, header: string }[]> {
//     const headers: Array<{ link: TableLink, header: string }> = [];
// this.lines.forEach(link => {
//     if (link.link.from === sourceTable) {
//         this.schematics[link.link.to].headers.forEach(header => {
//             headers.push({link: link.link, header: header.name})
//         })
//     }
// })
// return of(headers)
// }
//
// doesLinkExist(inputLink: TableLink): boolean {
//     return this.lines.some(link =>
//         (link.link.from === inputLink.from && link.link.to === inputLink.to) ||
//         (link.link.from === inputLink.to && link.link.to === inputLink.from)
//     );
// }
// saveSchematics(): void {
//     console.log(this.schematics)
// }
// setKeys(factTableIndex: number, headerIndex: number) {
//     // J'ai envie de recommencer tout ce componenent mai j'ai pas le temps, du coup voila :
//
//     this.selectedHeader.forEach((tableHeaders, tableIndex) => {
//         tableHeaders.forEach(selectedHeader => {
//             if (selectedHeader.link && selectedHeader.link.from === factTableIndex) {
//                 // Ca devrait trouver la table de dimension
//                 const dimensionTable = this.schematics[selectedHeader.link.to];
//                 const dimensionHeader = dimensionTable.headers.find(header => header.name === selectedHeader.header);
//
//                 if (dimensionHeader) {
//                     // Set de la foreign key, sauvez moi
//                     this.schematics[factTableIndex].headers[headerIndex].fk = {
//                         table: dimensionTable.table,
//                         field: dimensionHeader.name
//                     };
//                 }
//             }
//         });
//     });
// }
// loadLinks(): void {
//     this.schematics.forEach((schematic: ApiSchematicResponse, i: number) => {
//         if (!schematic.fact && schematic.headers[0].fk) {
//             this.drawNewLine(i, this.getSchematicIdByName(schematic.headers[0].fk.table));
//         }
//     })
// }
//
// test(): void {
//
// }
//
// getSchematicIdByName(name: string): number {
//     return this.schematics.findIndex((schematic) => schematic.table === name);
// }
//
// handleTableClick(tableClickedIndex: number) {
//
//     // Premier clic
//     if (this.firstTableClicked === undefined) {
//         if (this.schematics[tableClickedIndex].fact) {
//             this.firstTableClicked = tableClickedIndex;
//             return
//         }
//         if (!this.schematics[tableClickedIndex].fact) {
//             this.displayMessage(2);
//             return;
//         }
//     }
//
//     // Deuxième clic
//     if (this.firstTableClicked !== undefined) {
//         if (tableClickedIndex === this.firstTableClicked) {
//             this.firstTableClicked = undefined;
//             this.displayMessage(1);
//             return;
//         }
//     }
//
//     // Deux tableaux différents cliqués, création de l'objet link
//     const link: TableLink = {from: this.firstTableClicked, to: tableClickedIndex};
//     // Le lien existe déjà
//     if (this.doesLinkExist(link)) {
//         this.displayMessage(0);
//         this.firstTableClicked = undefined;
//         return;
//     }
//
//     // Pas d'erreur -> création du lien;
//     this.drawNewLine(tableClickedIndex);
//     this.getLinkedHeaders(this.firstTableClicked);
//     this.firstTableClicked = undefined;
//
// }
//
// handleTableStatusChange(): void {
//
// }
//
// drawNewLine(tableIndex: number, firstTableIndex?: number) {
//     let sourceTable: number;
//     if (firstTableIndex) {
//         sourceTable = firstTableIndex
//     } else {
//         sourceTable = this.firstTableClicked;
//     }
//
//     const line: LeaderLine = new LeaderLine(
//         this.tableElementsArray[sourceTable].el.nativeElement,
//         this.tableElementsArray[tableIndex].el.nativeElement,
//         {
//             path: 'straight',
//             startPlug: 'behind',
//             endPlug: 'behind',
//             color: '#2196F3',
//         },
//     )
//     this.lines.push(
//         {
//             link: {
//                 from: parseInt(this.tableElementsArray[sourceTable].el.nativeElement.id),
//                 to: parseInt(this.tableElementsArray[tableIndex].el.nativeElement.id),
//             },
//             line: line,
//         }
//     )
// }
//
// deleteLine(line: { link: TableLink, line: LeaderLine }) {
//     line.line.remove();
//     this.lines = this.lines.filter((link) =>
//         link.link.from !== line.link.from || link.link.to !== line.link.to
//     );
// }
//
// deleteAllLines(): void {
//     this.lines.forEach((line) => {
//         line.line.remove();
//     })
// }
//
// recalculateLine(): void {
//     this.lines.forEach((line) => {
//         line.line.position();
//     })
// }
