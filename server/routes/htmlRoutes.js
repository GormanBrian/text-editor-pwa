import path from "path";

const htmlRoutes = (app) =>
  app.get("/", (_, res) =>
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
  );

export default htmlRoutes;
