export interface Player {
    id: number;
    player: any;
    alive: boolean
    causeOfDeath: string;
}

export class Player {
    constructor(id: number, player?: any) {
        this.id = id;
        this.player = player;
        this.alive = true;
    }

    public kill(cause: string) {

        this.alive = false;
        this.causeOfDeath = cause;

    }
}