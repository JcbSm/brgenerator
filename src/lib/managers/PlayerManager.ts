import Collection from "@discordjs/collection";
import { Player } from "../structures/Player";
import { BaseManager } from "./BaseManager";

export interface PlayerManager {
    cache: Collection<number, Player>;
}

export class PlayerManager extends BaseManager<Player> {

    /**
     * Adds a player to the cache.
     * @param {any} player 
     * @returns {Player}
     */
    public add(player?: any): Player {
        const p = new Player(this.incID(), player)
        this.cache.set(p.id, p);
        return p;
    }

    /**
     * Removes a player from the cache.
     * @param {number | Player} resolveable 
     * @returns  {boolean}
     */
    public remove(resolveable: number | Player) {
        if (typeof resolveable === 'number') {
            return this.cache.delete(resolveable);
        } else {
            return this.cache.delete(resolveable.id);
        };
    }

    /**
     * Selects a given number of random players
     * @param {number} amount Number of players to pick.
     * @param {boolean} alive Whether or not the random player(s) is alive
     * @returns {Array<Player>}
     */
    public random(amount: number = 1, alive?: boolean): Player[] {

        let res: Player[] = [];
        let pp: Player[] = alive === undefined ? [...this.cache.values()] : [...this.cache.values()].filter(p => p.alive === alive)

        for (let i = 0; i < amount; i++) {
            const rng = Math.floor(Math.random()*pp.length);
            res.push(pp.splice(rng, 1)[0]);
        }

        return res;

    }

}