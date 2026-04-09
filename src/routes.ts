import {Router} from "express";

import animeController from "./controllers/animes";
const routes = Router();

routes.get("/", (request, response)=>
response.status(200).json({success:true}),
);

routes.get("/anime", animeController.list);
routes.get("/anime", animeController.getById);
routes.post("/anime", animeController.create);
routes.put("/anime/:id", animeController.update);
routes.delete("/anime/:id", animeController.delete);
