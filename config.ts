export default {
    server: {
        port: process.env.PORT || 3000
    },

    zen: {
        source: {
            redisUrl: process.env.REDIS_URL || "oh no!"
        }
    }
}
