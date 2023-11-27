import {Component, OnInit} from '@angular/core';
import {StructuredCsv} from "../../../../shared/models/strctured-csv";


@Component({
  selector: 'app-edit-schematic',
  templateUrl: './edit-schematic.component.html',
  styleUrls: ['./edit-schematic.component.scss']
})
export class EditSchematicComponent implements OnInit{
    data : Array<StructuredCsv> = [
        {
            "table": "DimDate.csv",
            "fact": false,
            "headers": [
                {
                    "name": "Annee",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "SKDate",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                }
            ],
            "data": [
                {
                    "Annee": "2021",
                    "SKDate": "1"
                },
                {
                    "Annee": ""
                }
            ]
        },
        {
            "table": "DimGeo.csv",
            "fact": false,
            "headers": [
                {
                    "name": "SKProvince",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "Province",
                    "type": "STRING",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "Region",
                    "type": "STRING",
                    "pk": false,
                    "fk": null
                }
            ],
            "data": [
                {
                    "SKProvince": "1",
                    "Province": "BW",
                    "Region": "Wallonie"
                },
                {
                    "SKProvince": "2",
                    "Province": "HAINAUT",
                    "Region": "Wallonie"
                },
                {
                    "SKProvince": "3",
                    "Province": "LIEGE",
                    "Region": "Wallonie"
                },
                {
                    "SKProvince": "4",
                    "Province": "LUXEMBOURG",
                    "Region": "Wallonie"
                },
                {
                    "SKProvince": "5",
                    "Province": "NAMUR",
                    "Region": "Wallonie"
                },
                {
                    "SKProvince": "6",
                    "Province": "BRUXELLES",
                    "Region": "Bruxelles-Capitale"
                },
                {
                    "SKProvince": "7",
                    "Province": "ANVERS",
                    "Region": "Flandres"
                },
                {
                    "SKProvince": "8",
                    "Province": "BR. FLAMAND",
                    "Region": "Flandres"
                },
                {
                    "SKProvince": "9",
                    "Province": "FLANDRE OCC.",
                    "Region": "Flandres"
                },
                {
                    "SKProvince": "10",
                    "Province": "FLANDRE OR.",
                    "Region": "Flandres"
                },
                {
                    "SKProvince": "11",
                    "Province": "LIMBOURG",
                    "Region": "Flandres"
                },
                {
                    "SKProvince": ""
                }
            ]
        },
        {
            "table": "DimNace.csv",
            "fact": false,
            "headers": [
                {
                    "name": "SKNace",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "CodeNace",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "SousSecteur",
                    "type": "STRING",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "CoefficientNace",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "Date",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                }
            ],
            "data": [
                {
                    "SKNace": "1",
                    "CodeNace": "2100",
                    "SousSecteur": "Sylviculture",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "2",
                    "CodeNace": "2200",
                    "SousSecteur": "Sylviculture",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "3",
                    "CodeNace": "2400",
                    "SousSecteur": "Sylviculture",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "4",
                    "CodeNace": "16100",
                    "SousSecteur": "Travail Bois",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "5",
                    "CodeNace": "16210",
                    "SousSecteur": "Travail Bois",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "6",
                    "CodeNace": "16220",
                    "SousSecteur": "Travail Bois",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "7",
                    "CodeNace": "16230",
                    "SousSecteur": "Travail Bois",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "8",
                    "CodeNace": "16240",
                    "SousSecteur": "Travail Bois",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "9",
                    "CodeNace": "16291",
                    "SousSecteur": "Travail Bois",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "10",
                    "CodeNace": "17110",
                    "SousSecteur": "Papier Carton",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "11",
                    "CodeNace": "17120",
                    "SousSecteur": "Papier Carton",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "12",
                    "CodeNace": "31010",
                    "SousSecteur": "Meuble",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "13",
                    "CodeNace": "31020",
                    "SousSecteur": "Meuble",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "14",
                    "CodeNace": "31091",
                    "SousSecteur": "Meuble",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "15",
                    "CodeNace": "31092",
                    "SousSecteur": "Meuble",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "16",
                    "CodeNace": "31099",
                    "SousSecteur": "Meuble",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "17",
                    "CodeNace": "43320",
                    "SousSecteur": "Menuiserie",
                    "CoefficientNace": "0.75",
                    "Date": "2021"
                },
                {
                    "SKNace": "18",
                    "CodeNace": "43332",
                    "SousSecteur": "Menuiserie",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "19",
                    "CodeNace": "46130",
                    "SousSecteur": "Commerce Gros",
                    "CoefficientNace": "0.16",
                    "Date": "2021"
                },
                {
                    "SKNace": "20",
                    "CodeNace": "46150",
                    "SousSecteur": "Commerce Gros",
                    "CoefficientNace": "0.1",
                    "Date": "2021"
                },
                {
                    "SKNace": "21",
                    "CodeNace": "46732",
                    "SousSecteur": "Commerce Gros",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "22",
                    "CodeNace": "47522",
                    "SousSecteur": "Commerce Detail",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "23",
                    "CodeNace": "47524",
                    "SousSecteur": "Commerce Detail",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "24",
                    "CodeNace": "47591",
                    "SousSecteur": "Commerce Detail",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": "25",
                    "CodeNace": "16292",
                    "SousSecteur": "Divers",
                    "CoefficientNace": "0.5",
                    "Date": "2021"
                },
                {
                    "SKNace": "26",
                    "CodeNace": "32200",
                    "SousSecteur": "Divers",
                    "CoefficientNace": "0.4",
                    "Date": "2021"
                },
                {
                    "SKNace": "27",
                    "CodeNace": "32400",
                    "SousSecteur": "Divers",
                    "CoefficientNace": "0.1",
                    "Date": "2021"
                },
                {
                    "SKNace": "28",
                    "CodeNace": "32910",
                    "SousSecteur": "Divers",
                    "CoefficientNace": "1",
                    "Date": "2021"
                },
                {
                    "SKNace": ""
                }
            ]
        },
        {
            "table": "DimStatutTravail.csv",
            "fact": false,
            "headers": [
                {
                    "name": "SKStatut",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "StatutLaboral",
                    "type": "STRING",
                    "pk": false,
                    "fk": null
                }
            ],
            "data": [
                {
                    "SKStatut": "0",
                    "StatutLaboral": "Employe.e"
                },
                {
                    "SKStatut": "1",
                    "StatutLaboral": "Ouvrier.e"
                },
                {
                    "SKStatut": ""
                }
            ]
        },
        {
            "table": "FactEffectifs.csv",
            "fact": false,
            "headers": [
                {
                    "name": "Effectifs",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "NaceFK",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "StatutFK",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "ProvinceFK",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "EffectifsPonderes",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                },
                {
                    "name": "DateFK",
                    "type": "INT",
                    "pk": false,
                    "fk": null
                }
            ],
            "data": [
                {
                    "Effectifs": "0",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "10",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "12",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "12",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "29",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "29",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "14",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "14",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "20",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "20",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "11",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "11",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "33",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "33",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "1",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "1",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "19",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "19",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "31",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "31",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "12",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "12",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "73",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "73",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "14",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "14",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "160",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "160",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "11",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "11",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "74",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "74",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "29",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "29",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "13",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "13",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "5",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "5",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "2",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "42",
                    "NaceFK": "2",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "42",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "22",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "22",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "10",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "10",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "12",
                    "NaceFK": "3",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "12",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "3",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "13",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "13",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "17",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "17",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "11",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "11",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "35",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "35",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "29",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "29",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "156",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "156",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "112",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "112",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "549",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "549",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "21",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "21",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "115",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "115",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "10",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "10",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "25",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "148",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "148",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "39",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "39",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "186",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "186",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "76",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "76",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "184",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "184",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "41",
                    "NaceFK": "4",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "41",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "173",
                    "NaceFK": "4",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "173",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "33",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "33",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "137",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "137",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "19",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "19",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "13",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "13",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "50",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "50",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "25",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "817",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "817",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1899",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "1899",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "31",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "31",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "37",
                    "NaceFK": "5",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "37",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "107",
                    "NaceFK": "5",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "107",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "83",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "83",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "149",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "149",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "6",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "19",
                    "NaceFK": "6",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "19",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "14",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "14",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "64",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "64",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "57",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "57",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "171",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "171",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "73",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "73",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "201",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "201",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "45",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "45",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "99",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "99",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "83",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "83",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "234",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "234",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "5",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "22",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "22",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "108",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "108",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "221",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "221",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "60",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "60",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "239",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "239",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "60",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "60",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "182",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "182",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "192",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "192",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "382",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "382",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "122",
                    "NaceFK": "7",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "122",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "306",
                    "NaceFK": "7",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "306",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "25",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "125",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "125",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "11",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "11",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "66",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "66",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "11",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "11",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "47",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "47",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "31",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "31",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "129",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "129",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "21",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "21",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "170",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "170",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "17",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "17",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "108",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "108",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "26",
                    "NaceFK": "8",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "26",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "130",
                    "NaceFK": "8",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "130",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "93",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "93",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "54",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "54",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "33",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "33",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "33",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "33",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "25",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "16",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "16",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "38",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "38",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "20",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "20",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "9",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "9",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "10",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "137",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "137",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "434",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "434",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "40",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "40",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "48",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "48",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "179",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "179",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "429",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "429",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "15",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "15",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "19",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "19",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "15",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "15",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "48",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "48",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "206",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "206",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "529",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "529",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "233",
                    "NaceFK": "11",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "233",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "513",
                    "NaceFK": "11",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "513",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "18",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "18",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "31",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "31",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "209",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "209",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "284",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "284",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "56",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "56",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "32",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "32",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "42",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "42",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "119",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "119",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "197",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "197",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "75",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "75",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "128",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "128",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "202",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "202",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "456",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "456",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "40",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "40",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "144",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "144",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "85",
                    "NaceFK": "12",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "85",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "146",
                    "NaceFK": "12",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "146",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "18",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "18",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "12",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "12",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "39",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "39",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "10",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "10",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "29",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "29",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "10",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "10",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "130",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "130",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "323",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "323",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "53",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "53",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "111",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "111",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "279",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "279",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "478",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "478",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "99",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "99",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "212",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "212",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "109",
                    "NaceFK": "13",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "109",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "223",
                    "NaceFK": "13",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "223",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "57",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "57",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "22",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "22",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "71",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "71",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "100",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "100",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "159",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "159",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "23",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "23",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "88",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "88",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "10",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "10",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "60",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "60",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "106",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "106",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "414",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "414",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "15",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "15",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "71",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "71",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "293",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "293",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1215",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "1215",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "116",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "116",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "407",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "407",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "87",
                    "NaceFK": "14",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "87",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "435",
                    "NaceFK": "14",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "435",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "51",
                    "NaceFK": "15",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "51",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "31",
                    "NaceFK": "15",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "31",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "12",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "12",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "19",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "19",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "21",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "21",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "16",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "16",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "102",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "76.5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "300",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "225",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "285",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "213.75",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1224",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "918",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "316",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "237",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1321",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "990.75",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "104",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "78",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "411",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "308.25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "128",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "96",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "619",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "464.25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "139",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "104.25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "359",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "269.25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "848",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "636",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2720",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "2040",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "365",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "273.75",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1065",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "798.75",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "759",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "569.25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3587",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "2690.25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1262",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "946.5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3317",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "2487.75",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "727",
                    "NaceFK": "17",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "545.25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1686",
                    "NaceFK": "17",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "1264.5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "18",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "18",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "19",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "19",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "36",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "36",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "67",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "67",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "15",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "15",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "73",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "73",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "16",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "16",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "117",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "117",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "11",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "11",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "24",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "24",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "19",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "19",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "108",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "108",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "10",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "10",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "59",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "59",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "18",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "29",
                    "NaceFK": "18",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "29",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0.64",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "20",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "3.2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "1.12",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0.32",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0.16",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0.16",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0.64",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0.48",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0.64",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0.16",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0.32",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "19",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0.32",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "19",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0.16",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0.2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0.1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0.4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0.6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "8",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0.8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0.4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "81",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "8.1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0.4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "20",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0.1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "20",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0.3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "110",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "110",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "19",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "19",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "137",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "137",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "132",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "132",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "131",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "131",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "180",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "180",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "43",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "43",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "47",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "47",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "41",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "41",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "70",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "70",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "332",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "332",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "345",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "345",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "82",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "82",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "131",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "131",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "511",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "511",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "447",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "447",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "278",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "278",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "348",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "348",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "338",
                    "NaceFK": "21",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "338",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "167",
                    "NaceFK": "21",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "167",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "5",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "18",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "18",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "14",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "14",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "5",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "15",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "15",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "24",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "24",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "25",
                    "NaceFK": "22",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "25",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "22",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "5",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "5",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "47",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "47",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "29",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "29",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "52",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "52",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "11",
                    "NaceFK": "23",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "11",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "18",
                    "NaceFK": "23",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "18",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "142",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "142",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "53",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "53",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "393",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "393",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "148",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "148",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "436",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "436",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "149",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "149",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "102",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "102",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "51",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "4",
                    "EffectifsPonderes": "51",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "448",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "448",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "92",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "92",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "999",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "999",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "172",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "172",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1187",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "1187",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "423",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "423",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4565",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "4565",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "142",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "142",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "604",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "604",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "248",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "248",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "983",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "983",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "281",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "281",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "338",
                    "NaceFK": "24",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "338",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "167",
                    "NaceFK": "24",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "167",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "13",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "6.5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "25",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "1.5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "25",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0.4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "26",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0.4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "23",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "9.2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "5",
                    "EffectifsPonderes": "0.4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "4",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "1.6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "0.8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "26",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0.4",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0.2",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0.02",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "0.1",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "1",
                    "EffectifsPonderes": "0.01",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "6",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "0.6",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "11",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "1.1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "3",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0.3",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "0.2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "6",
                    "EffectifsPonderes": "0.2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "0.9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "28",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "2.8",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "0.1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0.2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "10",
                    "EffectifsPonderes": "0.2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "27",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0.1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "27",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "0.2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "7",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "2",
                    "EffectifsPonderes": "7",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "3",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "9",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "9",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "2",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "7",
                    "EffectifsPonderes": "2",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "1",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "8",
                    "EffectifsPonderes": "1",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "38",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "38",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "79",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "9",
                    "EffectifsPonderes": "79",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "5",
                    "NaceFK": "28",
                    "StatutFK": "0",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "5",
                    "DateFK": "1"
                },
                {
                    "Effectifs": "14",
                    "NaceFK": "28",
                    "StatutFK": "1",
                    "ProvinceFK": "11",
                    "EffectifsPonderes": "14",
                    "DateFK": "1"
                },
                {
                    "Effectifs": ""
                }
            ]
        }
    ]; //TODO Supprimer quand les données viennent du back

    constructor() {
        console.log(this.data);
    }



    ngOnInit() {}
}
