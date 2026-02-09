// Wrapper to ensure server binds immediately and Cloud Run can connect
const { spawn } = require("child_process");

const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

// Set environment variables explicitly
process.env.PORT = PORT.toString();
process.env.HOSTNAME = HOSTNAME;

console.log(`Starting server on ${HOSTNAME}:${PORT}`);

// Start the Next.js server
const server = spawn("node", ["server.js"], {
  stdio: "inherit",
  env: process.env,
});

server.on("error", (err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

server.on("exit", (code) => {
  console.error(`Server exited with code ${code}`);
  process.exit(code || 1);
});

// Handle termination signals
process.on("SIGTERM", () => {
  console.log("Received SIGTERM, shutting down gracefully");
  server.kill("SIGTERM");
});

process.on("SIGINT", () => {
  console.log("Received SIGINT, shutting down gracefully");
  server.kill("SIGINT");
});
