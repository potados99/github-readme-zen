import ZenRepository from "../lib/repository/ZenRepository";
import config from "../config";

describe("Get zen", () => {
    it("should get data from redis", async () => {
        const repo = new ZenRepository(config.zen.source.redisUrl);

        const zen = await repo.getZen("kor");

        expect(zen).toBeTruthy();
    });

    it('should return error message for unknown language', async () => {
        const repo = new ZenRepository(config.zen.source.redisUrl);

        const zen = await repo.getZen("aaaaahaha");

        expect(zen).toBe("No zens found for language 'aaaaahaha' :(");
    });
});
