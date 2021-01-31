export default {
    zen: {
        sourceUrl: 'https://api.github.com/zen',
        fetchInterval: 60 * 60 * 1000
    },

    server: {
        port: process.env.PORT || 3000
    }
}
