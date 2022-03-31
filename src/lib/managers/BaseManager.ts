import Collection from "@discordjs/collection";

export interface BaseManager<V> {
    cache: Collection<number, V>;
    _serial: number;
}

export class BaseManager<V> {

    constructor () {

        this.cache = new Collection<number, V>()
        this._serial = 0;

    }

    public incID(): number {
        return this._serial++;
    }

}