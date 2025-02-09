import express from "express";
import { requestMiddleware } from "./middleware/requestMiddleware";
import { errorHandler } from "./middleware/errorHandler";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 3000;

// Apply middleware
app.use(requestMiddleware);

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// CLI endpoint
app.post("/run-cli", (req, res) => {
  exec("node dist/index.js", (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    if (stderr) {
      res.status(500).json({ error: stderr });
      return;
    }
    res.json({ output: stdout });
  });
});

// Apply error handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});