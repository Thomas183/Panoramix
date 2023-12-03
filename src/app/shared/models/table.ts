export interface  Table {
    id: string,
    table: string,
    headers:
        Array<{
            name: string
            type: string
        }>
}
