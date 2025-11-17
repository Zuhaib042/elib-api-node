import app from "./src/app.ts";
import { config } from "./src/config/config.ts";
import connectDb from "./src/config/db.ts";

const startServer = async () => {
  await connectDb()

  const port = config.port
  app.listen(port, () => {
    console.log("Listening on this port: ", port);
  });
};

startServer();
