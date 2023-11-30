export interface Chart {
    type: 'bar' | 'pie' | 'radar',
    data: {
        datasets: Array<{
            data: Array<number>,
        }>
        labels: Array<string>,
    }
}
