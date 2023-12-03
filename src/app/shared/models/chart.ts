export interface Chart {
    type: string,
    data: {
        datasets: Array<{
            data: Array<number>,
        }>
        labels: Array<string>,
    }
}
