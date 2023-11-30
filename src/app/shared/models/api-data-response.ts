export interface ApiDataResponse {
    data: DataItem[];
    page: number;
    size: number;
    pages: number;
}

interface DataItem {
    id: string;
    log: Log;
    values: Values;
}

interface Log {
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
}

interface Values {
    [key: string] : string | number;
}
