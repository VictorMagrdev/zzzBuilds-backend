import express from "express"

import characterRouter from "./character.router.js"

export const routerApi = (app) => {
  const router = express.Router()

  app.use("/api/v1", router)
  
  router.use('/zenless-zone-zero/characters', characterRouter)

}

