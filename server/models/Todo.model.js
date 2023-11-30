const { Schema, model } = require("mongoose")

const todoSchema = new Schema(
    {
        text: {
            type: String,
            lowercase: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const Todo = model("Todo", todoSchema)

module.exports = Todo
