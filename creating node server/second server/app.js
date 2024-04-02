import http from "http";
const port = 8000;
const hostname = "localhost";
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("create first server");
});

server.listen(port, hostname, () => {
  console.log(`server renning ${port}}`);
});
