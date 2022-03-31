import Collection from "@discordjs/collection";
import { Party } from "../structures/Party";
import { BaseManager } from "./BaseManager";

export interface PartyManager {
    cache: Collection<number, Party>
};

export class PartyManager extends BaseManager<Party> {

    public add(name: string): Party {
        const p = new Party(this.incID(), name);
        this.cache.set(p.id, p);
        return p;
    }

    public remove(resolveable: number | Party): boolean {
        if (typeof resolveable === 'number') {
            return this.cache.delete(resolveable);
        } else {
            return this.cache.delete(resolveable.id);
        };
    }

}