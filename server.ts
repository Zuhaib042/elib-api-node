import app from "./src/app.js";

const startServer = () => {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log("Listening on this port: ", port);
  });
};

startServer();
