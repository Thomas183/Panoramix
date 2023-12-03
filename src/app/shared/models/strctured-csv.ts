import {TableLink} from "./table-link";

export interface StructuredCsv {
    tableName: string;
    headers: Array<{
        name: string;
        type: 'INT' | 'FLOAT' | 'STRING';
        pk: boolean;
        fk: { table: string; field: string } | null;
    }>;
    data: { [key: string]: any }[];
    links?: TableLink[];
}
