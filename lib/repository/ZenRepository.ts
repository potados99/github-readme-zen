import config from "../../config";

import fetch from "node-fetch";

class ZenRepository {
    private lastFetch: number = 0;
    private latestZen: string = "";

    async getLatestZen() {
        await this.fetchIfNeeded();

        return this.latestZen;
    }

    private async fetchIfNeeded() {
        const timeToFetch = (Date.now() - this.lastFetch) > config.zen.fetchInterval;
        if (!timeToFetch) {
            console.log("Reuse zen!");
            return;
        }

        console.log("Fetch zen!");

        this.latestZen = await this.fetchZen();
        this.lastFetch = Date.now();
    }

    private async fetchZen() {
        const result = await fetch(config.zen.sourceUrl);
        return result.text();
    }
}

const zenRepository = new ZenRepository();

export default zenRepository;
