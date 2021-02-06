import express from 'express';
import config from "../../config";
import ZenRepository from "../repository/ZenRepository";
import SvgRepository from "../repository/SvgRepository";

export default function startServer() {
    const app = express();

    const zenRepository = new ZenRepository(config.zen.source.redisUrl);
    const svgRepository = new SvgRepository();

    app.get("/", async (req, res) => {
        const {lang} = req.query;

        const zen = await zenRepository.getZen(lang as string);
        const svg = await svgRepository.createSvgFromText(zen);

        console.log(`Visit from ${req.ip}`);

        res
            .contentType("image/svg+xml")
            .set("Cache-Control", "public, max-age=0, must-revalidate")
            .send(svg);
    });

    app.listen(config.server.port);

    console.log(`Listening on ${config.server.port}`);
}

