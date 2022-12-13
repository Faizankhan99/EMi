const { Schema, model } = require('mongoose')

const UserShema = new Schema({
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
})

const user = model("user", UserShema)

module.exports = user