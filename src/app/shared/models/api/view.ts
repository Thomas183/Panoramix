import {HistoryLog} from "../historyLog";

export interface View {
    id: string,
    log: HistoryLog,
    chart: 'BAR' | 'RADAR' | 'PIE',
    label: {
        table: string,
        field: string,
    }
    data?: {
        table: string,
        field: string,
        pkValue?: string
    }
}

export interface Chart {
    labels: Array<string>,
    datasets: Array<{
        label: string,
        data: string,
    }>
}

export interface ViewForm {
    chart: 'BAR' | 'RADAR' | 'PIE'
    labels: {
        table: string,
        field: string,
    }
    data?: {
        table: string,
        field: string,
        pkValue? : string,
    }
}
