const http = require("http");
// const fs = require("fs");

const myServer = http.createServer((req,res) => {
    console.log("We have received your request.")
    // fs.appendFile()
    res.end("Welcome, User");

})

myServer.listen(3000, () => {
    console.log("Server is running on port 3000 Successfully");
})

http.createServer()

// node index
// ctrl + C = for end the server