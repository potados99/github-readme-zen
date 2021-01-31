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
        const content = await result.text();
        const isAnError = content.startsWith("{");

        if (isAnError) {
            console.log(`Error! ${content}`);
            return this.getFromFallbackZen();
        } else {
            return content;
        }
    }

    private getFromFallbackZen() {
        const allZens = [
            "It's not fully shipped until it's fast.",
            "Practicality beats purity.",
            "Avoid administrative distraction.",
            "Mind your words, they are important.",
            "Non-blocking is better than blocking.",
            "Design for failure.",
            "Half measures are as bad as nothing at all.",
            "Favor focus over features.",
            "Approachable is better than simple.",
            "Encourage flow.",
            "Anything added dilutes everything else.",
            "Speak like a human.",
            "Responsive is better than fast.",
            "Keep it logically awesome."
        ];

        // Random pick
        return allZens[Math.floor(Math.random() * allZens.length)];
    }
}

const zenRepository = new ZenRepository();

export default zenRepository;
