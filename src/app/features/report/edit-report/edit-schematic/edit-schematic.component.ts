import {
    AfterViewInit,
    Component,
    OnDestroy, OnInit,
    QueryList,
    ViewChildren
} from '@angular/core';
import {Table as pTable} from "primeng/table";
import {Table as csvTable} from '../../../../shared/models/table'
import {TableService} from "../../../../shared/services/table.service";
import {GetSchematicResponse, Header} from "../../../../shared/models/api-schematic-responses";
import {Message, MessageService} from "primeng/api";
import {Observable, of} from "rxjs";
import {DropdownChangeEvent} from "primeng/dropdown";


declare var LeaderLine: any;

interface TableLink {
    factTableId: string,
    dimensionTableId: string,
    line: LeaderLine;
}

@Component({
    selector: 'app-edit-schematic',
    templateUrl: './edit-schematic.component.html',
    styleUrls: ['./edit-schematic.component.scss'],
    providers: [MessageService],
})

export class EditSchematicComponent implements AfterViewInit, OnDestroy, OnInit {
    // Récupération des références des tableaux
    @ViewChildren('tableRef') tableRefArray: QueryList<pTable>;
    tableElementArray: Array<pTable> = [];

    // Mémoire pour le premier tableau cliqué d'une paire
    firstTableClickedId: string | undefined = undefined;

    // Listes des schéma du projet
    schematics: Array<GetSchematicResponse>;

    // Répertoire des lignes tracées avec les coordoonées et l'objet Leaderline
    tableLinks: Array<TableLink> = [];

    // Liste des messages pouvant êtres affichés
    messages: Array<Message> = [
        {severity: 'warn', summary: 'Attention', detail: 'Le lien existe déjà'}, // 0
        {severity: 'warn', summary: 'Attention', detail: 'Impossible de lier un tableau à lui même'}, // 1
        {severity: 'warn', summary: 'Attention', detail: 'Un lien doit démarrer d\'une table de fait'}, // 2
        {severity: 'warn', summary: 'Attention', detail: 'Impossible de lier deux tables de fait ensemble'}, // 3
    ];
    // Liste des messages affichés à l'écran
    messagesToDisplay: Array<Message> = [];


    constructor(private _dataService: TableService, private _messageService: MessageService) {
    }

    ngOnInit() {
        this.initializeSchematics();
    }

    ngAfterViewInit() {
        this.tableElementArray = this.tableRefArray.toArray();
        this.getLinks();
    }

    ngOnDestroy() {
    }

    // Fonction pour afficher un popup à l'écran
    displayMessage(id: number): void {
        this._messageService.add(this.messages[id]);
        setTimeout(() => {
            this._messageService.clear();
        }, 3500);
    }

    // Fonction pour initialiser / réinisialiser les propriétés de tout les schémas liés au rapport
    initializeSchematics(): void {
        const csvTables: Array<csvTable> = this._dataService.tables;
        this.schematics = [];
        csvTables.forEach(table => {
            // Get headers from CSV
            const headers: Array<Header> = [];
            for (let header of table.headers) {
                headers.push({
                    id: Math.random().toString(),
                    fk: null,
                    pk: false,
                    ...header
                })
            }
            // Push newly created schematic object
            this.schematics.push({
                id: table.id,
                table: table.table,
                fact: false,
                headers: headers,
                log: {
                    createdAt: new Date().toISOString(),
                    createdBy: 'user@example.com',
                    updatedAt: new Date().toISOString(),
                    updatedBy: 'user@example.com',
                },

                coord: {
                    x: 0,
                    y: 0,
                },

            })
        })
    }

    getTableElementIndexById(id: string): number {
        return this.tableElementArray.findIndex(table => table.el.nativeElement.id === id)
    }

    getSchematicByTableId(id: string): GetSchematicResponse {
        return this.schematics.find(schematic => schematic.id === id);
    }

    getHeaderFromId(id: string): Header {
        let foundHeader: Header;
        for (const schematic of this.schematics) {
            foundHeader = schematic.headers.find(header => header.id === id);
        }
        return foundHeader;
    }

    // Détermine l'action à entreprendre en fonction du tableau sur lequel l'utilisateur a cliqué
    handleTableClick(clickedTableId: string) {
        const schematic = this.getSchematicByTableId(clickedTableId)

        // Premier tableau cliqué
        if (this.firstTableClickedId === undefined) {
            if (!schematic.fact) { // Le tableau n'est pas un tableau de fait
                this.displayMessage(2);
                return
            }
            this.firstTableClickedId = clickedTableId;
            return;
        }

        // Deuxième clic
        if (this.firstTableClickedId === schematic.id) { // Même tableau cliqué deux fois
            this.displayMessage(1);
            this.firstTableClickedId = undefined;
            return;
        }
        if (schematic.fact){
            this.displayMessage(3);
            this.firstTableClickedId = undefined;
            return;
        }
        const doesLinkExist = this.tableLinks.some(link =>
            (link.dimensionTableId === clickedTableId) ||
            (link.factTableId === this.firstTableClickedId));
        if (doesLinkExist) { // Lien déjà existant
            this.displayMessage(0);
            this.firstTableClickedId = undefined;
            return;
        }

        // Pas d'erreur -> lien entre tableau de fait et dimension
        this.drawNewLine(clickedTableId, this.firstTableClickedId);
        this.getHeadersFromLink(this.firstTableClickedId);
        this.firstTableClickedId = undefined;
    }

    drawNewLine(dimensionTableId: string, factTableId: string) {
        const dimensionTableElement = this.tableElementArray[this.getTableElementIndexById(dimensionTableId)];
        const factTableElement = this.tableElementArray[this.getTableElementIndexById(factTableId)];

        const line: LeaderLine = new LeaderLine(
            factTableElement.el.nativeElement,
            dimensionTableElement.el.nativeElement,
            {
                path: 'straight',
                startPlug: 'behind',
                endPlug: 'behind',
                color: '#2196F3'
            }
        )

        this.tableLinks.push({
            factTableId: factTableId,
            dimensionTableId: dimensionTableId,
            line,
        })
    }

    // Retrouve une liste de tout les champs à afficher dans le dropdown d'une table de fait ainsi que des données
    // supplémentaires pour gérer l'action à la sélection
    getHeadersFromLink(factTableId: string): Observable<{tableId: string, headerId: string, headerName: string}[]> {
        const headersInfo: Array<{ tableId: string, headerId: string, headerName: string }> = [];

        this.tableLinks.forEach(link => {
            if (link.factTableId === factTableId) {
                const headers = this.getSchematicByTableId(link.dimensionTableId).headers;
                for (let header of headers) {
                    headersInfo.push({tableId: link.dimensionTableId, headerId: header.id, headerName: header.name})
                }
            }
        })
        return of(headersInfo);
    }

    deleteLine(tableLink: TableLink) {
        tableLink.line.remove();
        this.tableLinks = this.tableLinks.filter(link =>
            link.factTableId !== tableLink.factTableId || link.dimensionTableId !== tableLink.dimensionTableId
        )
    }

    // Permet de recalculer le positionnement des lignes
    recalculateLines() {
        this.tableLinks.forEach(link => {
            link.line.position();
        })
    }

    // Vérifie si le tableau à déjà un lien attaché pour empêcher l'utilisateur de cocher / décocher la table de fait
    doesTableHaveALink(tableId: string): boolean {
        return this.tableLinks.some(link =>
            (link.factTableId === tableId) ||
            (link.dimensionTableId === tableId))
    }

    // Fonction qui gère l'événement qui se produit lorsqu'on sélectionne une option dans un dropdown
    onDropDownSelect(headerId: string, event: DropdownChangeEvent): void {

        const headerToUpdate = this.getHeaderFromId(headerId);
        const selectedHeader = this.getHeaderFromId(event.value.headerId)

        headerToUpdate.fk = {
            table: event.value.factTableId,
            field: selectedHeader.id,
        }
    }

    // Redessine les liens en fonction des foreign keys
    getLinks() {
        this.schematics.forEach(schematic => {
            if (!schematic.fact && schematic.headers[0].fk) {
                this.drawNewLine(schematic.id, schematic.headers[0].fk.table)
            }
        })
    }

    // Enregistre les modifications apportées au schémas
    saveSchematics() {
        const putRequestBody: any[] = [];

        this.schematics.forEach(schematic => {
            const headers: Header[] = [];

            putRequestBody.push({
                id: schematic.id,
                fact: schematic.fact,
                headers: schematic.headers,
                coord: {
                    x: 0,
                    y: 0,
                }
            })
        })
    }

}
