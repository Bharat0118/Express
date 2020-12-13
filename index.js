const express = require("express")
const path = require("path")
const hbs = require("hbs")
const port = process.env || 3000

const app = express()

const staicPath = path.join(__dirname, "./public")
const tempPath = path.join(__dirname, "./templates/views")
const partialPath = path.join(__dirname, "./templates/partials")
    //setting view engine
app.set("view engine", "hbs")
app.set("views", tempPath)
hbs.registerPartials(partialPath)

//build-in middleware
app.use(express.static(staicPath))


app.get("", (req, res) => {
    res.render("index", {
        name: "Bharat"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        name: "Bharat"
    })
})

app.get("/about/*", (req, res) => {
    res.render("error", {
        errcmnt: "OOPS this about page is not found!!!"
    })
})


app.get("*", (req, res) => {
    res.render("error", {
        errcmnt: "OOPS page not found!!!"
    })
})


// app.get("/", (req, res) => {
//     res.send("Hello from home 1")
// })

// app.get("/about", (req, res) => {
//     res.send("Hello from abut page")
// })

app.listen(port, () => {
    console.log("app is listing at port:3000");
})