let express = require("express")
let my_route = require("./Books")
let fs = require("fs")

let app = express()

let logger = (req, res, next) => {

    let method = req.method
    let url = req.url
    let content_type = req.header('Content-Type') // "application/json"
    let agent = req.header('user-agent')//Mozilla/5.0 (Macintosh Intel Mac OS X 10_8_5) AppleWebKit
    let protocol = req.protocol // "https"
    let hostname = req.hostname // "example.com"

    let data = `[${method}] - ${url} - [${content_type}] - [${agent}] - [${protocol}] - [${hostname}]- ${Date()}\n`
    //write data to server.log
    fs.appendFile("server.log", data, (err) => {
        if(err) throw err
        console.log("Server log saved...")
    })
    next()
}

//Middleware to log the time
app.use(logger)

app.get("/", (req, res)=>
{
   res.send("<h1>Hello, express routes example</h1>")
})
//Express Route
let get_request_handler = (req, res) =>{
    res.send("<h1>Hello, GET")
}

app.route("/hello")
   .get(get_request_handler)
   .post((req, res) => {
        res.send("<h1>Hello, POST")
    })
   .delete((req, res) => {
        res.send("<h1>Hello, DELETE")
    })
   .patch((req, res) => {
        res.send("<h1>Hello, PATCH")
    })

//express.Router()
app.use("/store", my_route)

let SERVER_PORT = process.env.PORT || 8089
app.listen(SERVER_PORT)
console.log(`Server running at port ${SERVER_PORT}`)
// console.log(process.env)