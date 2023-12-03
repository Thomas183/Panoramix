export interface GetSchematicResponse {
    id: string;
    log: Log;
    fact: boolean;
    coord: Coordinate;
    table: string;
    headers: Header[];
}

export interface PutSchematic {
    id: string;
    fact: boolean;
    headers: Header[];
    coord: Coordinate;
}

interface Log {
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
}

interface Coordinate {
    x: number;
    y: number;
}

export interface Header {
    id: string;
    pk: boolean;
    name: string;
    fk?: ForeignKey;
}

interface ForeignKey {
    field: string;
    table: string;
}
