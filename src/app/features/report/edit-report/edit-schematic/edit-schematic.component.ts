import {
    AfterViewInit, ChangeDetectorRef,
    Component,
    OnDestroy, OnInit,
    QueryList,
    ViewChildren
} from '@angular/core';
import {Table as pTable} from "primeng/table";
import {Message, MessageService} from "primeng/api";
import {forkJoin, map, Observable, of} from "rxjs";
import {DropdownChangeEvent} from "primeng/dropdown";
import {SchemaTable, SchemaTableForm, SchemaTableHeader} from "@models/api/schematic";
import {ReportService} from "@services/api/report.service";
import {EditReportService} from "@services/edit-report.service";
import {DataRow} from "@models/api/data";
import {DataService} from "@services/api/data.service";
import {ErrorForm} from "@models/api/error";
import {CheckboxChangeEvent} from "primeng/checkbox";
import {ActivatedRoute} from "@angular/router";


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
    rowsToDisplays: number = 4;
    // Data for the primeNg Table to display
    dataMap: { [schematicId: string]: DataRow[] } = {};
    // ID of the report
    reportId: string;
    // Mémoire pour le premier tableau cliqué d'une paire
    firstTableClickedId: string | undefined = undefined;
    // Listes des schéma du projet
    schematics: Array<SchemaTable> = [];
    // Répertoire des lignes tracées avec les coordoonées et l'objet Leaderline
    tableLinks: Array<TableLink> = [];
    // Liste des messages pouvant êtres affichés
    messages: Array<Message> = [
        {severity: 'warn', summary: 'Attention', detail: 'Le lien existe déjà'}, // 0
        {severity: 'warn', summary: 'Attention', detail: 'Impossible de lier un tableau à lui même'}, // 1
        {severity: 'warn', summary: 'Attention', detail: 'Un lien doit démarrer d\'une table de fait'}, // 2
        {severity: 'warn', summary: 'Attention', detail: 'Impossible de lier deux tables de fait ensemble'}, // 3
        {severity: 'success', summary: 'Success', detail: 'Schéma mis à jour'}, // 4
        {severity: 'warn', summary: 'Erreur', detail: 'Echec de la mise à jour'}, // 5
        {severity: 'warn', summary: 'Attention', detail: 'Une table de fait ne peut pas avoir de primary Key'}, // 5
    ];
    // Liste des messages affichés à l'écran
    messagesToDisplay: Array<Message> = [];


    constructor(
        private _reportService: ReportService,
        private _messageService: MessageService,
        private _editReportService: EditReportService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _dataService: DataService,
        private _route: ActivatedRoute) {
    }


    ngOnInit() {
        this.reportId = this._editReportService.reportId
        this._reportService.getReportSchematics(this.reportId).subscribe({
            next: (data) => {
                console.log(data)
            }
        })
        this.initializeSchematics();
    }

    ngAfterViewInit() {

    }

    ngOnDestroy() {
        this.deleteAllLines();
    }

    getSchematicCellData(tableId: string): Observable<DataRow[]> {
        return this._dataService.getTableData(tableId, 0, this.rowsToDisplays).pipe(
            map(response => response.data.map(item => item.values)));
    }

    populateDataMap(): Observable<{ [schematicId: string]: DataRow[] }> {
        const observables: Observable<{ id: string, dataRows: DataRow[] }>[] = this.schematics.map(schematic =>
            this.getSchematicCellData(schematic.id).pipe(
                map(dataRows => ({id: schematic.id, dataRows}))
            )
        );

        return forkJoin(observables).pipe(
            map(results => {
                results.forEach(result => {
                    this.dataMap[result.id] = result.dataRows;
                });
                return this.dataMap;
            })
        );
    }


// Fonction pour afficher un popup à l'écran
    displayMessage(id: number): void {
        this._messageService.add(this.messages[id]);
        setTimeout(() => {
            this._messageService.clear();
        }, 3500);
    }

    initializeSchematics(): void {
        console.log(this.reportId)
        this._reportService.getReportSchematics(this.reportId).subscribe({
            next: (schematics) => {
                for (let schematic of schematics) {
                    this.schematics.push(schematic);
                    this._changeDetectorRef.detectChanges();
                    this.tableElementArray = this.tableRefArray.toArray();
                    this.populateDataMap().subscribe();
                }
            },
            complete: () => {
                this.getLinks();
            }
        })
    }

    getTableElementIndexById(id: string): number {
        return this.tableElementArray.findIndex(table => table.el.nativeElement.id === id)
    }

    getSchematicByTableId(id: string): SchemaTable {
        return this.schematics.find(schematic => schematic.id === id);
    }

    getHeaderFromId(id: string): SchemaTableHeader {
        for (const schematic of this.schematics) {
            for (let header of schematic.headers) {
                if (header.id === id) {
                    return header;
                }
            }
        }
        return undefined;
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
        if (schematic.fact) {
            this.displayMessage(3);
            this.firstTableClickedId = undefined;
            return;
        }
        const doesLinkExist = this.tableLinks.some(link =>
            (link.dimensionTableId === clickedTableId) &&
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
        const factTableElement = this.tableElementArray[this.getTableElementIndexById(factTableId)];
        const dimensionTableElement = this.tableElementArray[this.getTableElementIndexById(dimensionTableId)];

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

    /*
    Retrouve une liste de tout les champs à afficher dans le dropdown d'une table de fait ainsi que des données
    supplémentaires pour gérer l'action à la sélection
    */
    getHeadersFromLink(factTableId: string): Observable<Array<{
        tableId: string,
        headerId: string,
        headerName: string
    }>> {
        const headersInfo: Array<{ tableId: string, headerId: string, headerName: string }> = [];
        headersInfo.push({tableId: '0', headerId: '0', headerName: 'Vide'})
        this.tableLinks.forEach(link => {
            if (link.factTableId === factTableId) {
                const headers = this.getSchematicByTableId(link.dimensionTableId).headers;
                for (let header of headers) {
                    if (header.pk) {
                        headersInfo.push({tableId: link.dimensionTableId, headerId: header.id, headerName: header.name})
                    }
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

    deleteAllLines(): void {
        this.tableLinks.forEach(link => {
            link.line.remove();
        })
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
        // Header de la table à modifier
        const headerToUpdate: SchemaTableHeader = this.getHeaderFromId(headerId);
        // Retrait de la fk
        if (event.value.headerId === '0') {
            headerToUpdate.fk = null
        }

        // Id du header de la table source
        const selectedHeader: SchemaTableHeader = this.getHeaderFromId(event.value.headerId)

        headerToUpdate.fk = {
            table: event.value.tableId,
            field: selectedHeader.id
        }
    }

// Redessine les liens en fonction des foreign keys
    getLinks() {
        for (let schematic of this.schematics) {
            for (let header of schematic.headers) {
                if (schematic.fact && header.fk !== null) {
                    this.drawNewLine(header.fk.table, schematic.id);
                }
            }
        }
    }

// Enregistre les modifications apportées au schémas
    saveSchematics() {
        const schematicForm: Array<SchemaTableForm> = [];

        for (let schematic of this.schematics) {
            schematicForm.push({
                id: schematic.id,
                fact: schematic.fact,
                headers: schematic.headers,
                coord: {
                    x: 0,
                    y: 0,
                }
            })
        }
        this._reportService.editSchematic(this.reportId, schematicForm).subscribe({
            next: () => {
                this.displayMessage(4);
            },
            error: (error) => {
                console.log(error as ErrorForm)
                this.displayMessage(5);
            }
        })
    }

// Set all headers to not be a primary key
    removePrimaryKeysFromSchematic(id: string, event: CheckboxChangeEvent) {
        const schematic: SchemaTable = this.getSchematicByTableId(id)
        if (!event.checked) {
            for (let header of schematic.headers) {
                header.pk = false;
            }
        }
        if (event.checked) {
            for (let header of schematic.headers) {
                header.fk = null
            }
        }


    }

}
