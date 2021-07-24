const express = require("express")
const date = require(__dirname+"/date.js")
console.log(date.getTodayDay())

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
app.set("view engine", "ejs")

const items = ["Buy food", "Cook food", "Eat food"]
const workItems = []

    
app.get("/", function(req, res) {
    res.render("list", {
        day : date.getTodayDate(),
        listItems : items
    })
})

app.post("/", function(req, res) {
    if(req.body.submit == "Work") {
        workItems.push(req.body.item)
        res.redirect("/work")
    } else {
        items.push(req.body.item)
        res.redirect("/")
    }
})

app.get("/work", function(req, res) {
    res.render("list", {
        day : "Work",
        listItems : workItems
    })
})

app.get("/about", function(req, res) {
    res.render("about")
})

app.listen(3000, function() {
    console.log('Server started at port 3000')
})