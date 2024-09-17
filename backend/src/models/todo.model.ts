import mongoose from "mongoose";

type TodoSchemaType ={
    title: string,
    todoContent: string,
    checked: boolean
}
const TodoSchema = new mongoose.Schema<TodoSchemaType>({
    title: {
        type: String,
        required: true
    },
    todoContent: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export const Todo = mongoose.model("Todo", TodoSchema)