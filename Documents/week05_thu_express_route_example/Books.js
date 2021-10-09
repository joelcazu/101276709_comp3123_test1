let express = require("express")
let my_route = express.Router()

my_route.get("/", (req, res) => {
    res.send("<h1>/store</h1>")
})

my_route.route("/book")
   .get((req, res) => {
        res.send("<h1>/store/book</h1>")
    })
    .post((req, res) => {
        res.send("<h1>/store/book</h1>")
    })
   .delete((req, res) => {
        res.send("<h1>/store/book</h1>")
    })

    my_route.get("/book/author", (req, res) => {
        res.send("<h1>/store/book/author</h1>")
    })

    my_route.get("/joel", (req, res) => {
        res.send("<h1>/book/joel</h1>")
    })
   
    module.exports = my_route