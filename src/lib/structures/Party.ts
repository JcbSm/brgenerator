export interface Party {
    id: number;
    name: string;
}

export class Party {
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}