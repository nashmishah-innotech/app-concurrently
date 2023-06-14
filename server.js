const express = require("express");
const path = require("path");

const app = express();

console.log("Hello");

const assetsRouter = require("../back-end/assets-router");
app.use("/src", assetsRouter);

app.use("/", express.static(path.join(__dirname, "public")));
app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
  });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// const {PORT = 5000 } = process.env
const PORT = 5000;

app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
