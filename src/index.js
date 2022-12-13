const express = require('express')
const { mongoose } = require('mongoose')
const user = require("./Routing/User.route")
const cors=require("cors")

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/user",user)
app.get('/', (req, res) => res.send('hello'))


app.listen(8080, async() => {
  await mongoose.connect('mongodb+srv://faizan:faizan@cluster0.hnanw0r.mongodb.net/Users')
    console.log('server started on port 8080')
})