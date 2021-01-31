import express from 'express';
import zenRepository from "../repository/ZenRepository";
import svgRepository from "../repository/SvgRepository";
import config from "../../config";

export default function startServer() {
    const app = express();

    app.get("/", async (req, res) => {
        const zen = await zenRepository.getLatestZen();
        const svg = await svgRepository.createSvgFromText(zen);

        console.log(`Visit from ${req.ip}`);

        res.contentType("image/svg+xml").send(svg);
    });

    app.listen(config.server.port);

    console.log(`Listening on ${config.server.port}`);
}

