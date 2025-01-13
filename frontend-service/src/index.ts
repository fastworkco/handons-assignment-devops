import { Elysia } from "elysia";

const BACKEND_SERVICE = process.env.BACKEND_SERVICE || 'http://localhost:3000';

const app = new Elysia()
  .get("/health", () => ({
    status: "healthy",
    service: "frontend",
    hostname: Bun.env.HOSTNAME || "unknown",
    timestamp: new Date().toISOString()
  }))
  .get("/", async () => {
    try {
      const backendResponse = await fetch(`${BACKEND_SERVICE}/api/data`);
      const backendData = await backendResponse.json();

      return {
        frontend_host: Bun.env.HOSTNAME || "unknown",
        frontend_pod_ip: Bun.env.POD_IP || "unknown",
        backend_response: backendData,
        timestamp: new Date().toISOString()
      };
    } catch (error: unknown) {
      return {
        error: "Failed to connect to backend service",
        details: (error as Error).message,
        timestamp: new Date().toISOString()
      };
    }
  })
  .listen(8080);

console.log(
  `🦊 Frontend service is running at ${app.server?.hostname}:${app.server?.port}`
);
