import { createServer } from "http";

const server = createServer((_, response) => {
  response.statusCode = 200;

  response.setHeader("Content-Type", "text/plain");

  response.end("Hello, Kubernetes!");
});

const port = Number(process.env.APPLICATION_PORT || 7777);
const hostname = process.env.APPLICATION_HOST || "0.0.0.0";

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
