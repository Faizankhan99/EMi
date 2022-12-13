const Userdata = require("../Model/User.model")
const express = require("express")
const app = express.Router()


app.get("/",async(req, res)=> {
    const data = await Userdata.find()
    res.send(data)
})

app.post("/signup", async(req, res) => {
    const { name, email, password } = req.body
    try {
        const data = await Userdata.findOne({ email })
        if (data) {
            res.send("User already exists")
        } else {
            let new_user = await Userdata.create({ name, email, password })
            res.send(new_user)       
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/login", async(req, res) => {
    const { email, password } = req.body
    try {
        let user = await Userdata.findOne({ email, password }) 
        if (!user) {
            res.send("User not found")
        } else {
            res.send(user._id)
        }
    } catch (err) {
        console.log(err)
    }
})






module.exports=app