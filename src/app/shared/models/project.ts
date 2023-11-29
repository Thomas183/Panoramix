export interface Project {
    id: string,
    name: string,
    description: string,
    isPublic: boolean,
    log: {
        createAt: string,
        updatedAt: string,
        createdBy: string,
        updatedBy: string,
    }
}
