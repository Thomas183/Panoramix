export interface ApiSchematicResponse {
    id: string;
    log: Log;
    fact: boolean;
    coord: Coordinate;
    table: string;
    headers: Header[];
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
