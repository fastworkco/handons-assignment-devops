import { Elysia } from "elysia";

const app = new Elysia()
  .get("/health", () => ({
    status: "healthy",
    service: "backend",
    hostname: Bun.env.HOSTNAME || "unknown",
    timestamp: new Date().toISOString()
  }))
  .get("/api/data", () => ({
    message: "Hello from backend!",
    hostname: Bun.env.HOSTNAME || "unknown",
    podIp: Bun.env.POD_IP || "unknown",
    timestamp: new Date().toISOString()
  }))
  .listen(3000);

console.log(
  `🦊 Backend service is running at ${app.server?.hostname}:${app.server?.port}`
);
