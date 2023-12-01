export interface Table {
    table: string,
    headers:
        Array<{
            name: string
            type: string
        }>
}
