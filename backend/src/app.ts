import express from "express";

const app = express();

// routes

app.get('/', (req, res, next) => {
  res.json({message: "Welcome to elib api"})
})

export default app;
