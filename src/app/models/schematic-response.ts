export interface SchematicResponse {
    table: string,
    fact: boolean,
    headers : Array<{
        id: string,
        name: string,
        type: string,
        pk: boolean,
        fk? : {
            table: string,
            field : string,
        }
    }>,
    log : {
        updatedAt: Date,
        updatedBy: string,
    }
}
