const http = require("http");

const myServer = http.createServer((req, res) => {
  const currentDate = new Date();
  console.log(`${currentDate} - We have received your request.`);
  res.end("Welcome, User");
  req.url()
});

myServer.listen(3000, () => {
  const currentDate = new Date();
  console.log(`${currentDate} - Server is running on port 3000 Successfully`);
});