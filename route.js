const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello from home")
})

app.get("/about", (req, res) => {
    res.send("Hello from about page")
})

app.get("/contact", (req, res) => {
    res.send("Hello from contact page")
})

app.get("/temp", (req, res) => {
    res.send("Hello from temp page")
})

app.listen(3000, () => {
    console.log("app is listing at port:3000");
})