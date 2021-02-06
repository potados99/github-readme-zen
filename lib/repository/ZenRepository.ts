import redis, {RedisClient} from "redis"
import {promisify} from "util"

class ZenRepository {
    private readonly redisClient: RedisClient;

    constructor(redisUrl: string) {
        this.redisClient = redis.createClient({
            url: redisUrl
        });

        this.redisClient.on("error", (error) => {
            console.error(`Error from redis! ${error}`);
        });
    }

    async getZen(language?: string) {
        const allZens = await this.getAllZensFromRedis(language);
        if (allZens.length === 0) {
            return `No zens found for language '${language}' :(`;
        }

        return ZenRepository.randomPick(allZens);
    }

    private async getAllZensFromRedis(language?: string) {
        const getAsync = promisify(this.redisClient.smembers).bind(this.redisClient);

        return getAsync(language || "kor");
    }

    private static randomPick(collection: string[]) {
        return collection[Math.floor(Math.random() * collection.length)];
    }
}

export default ZenRepository;
