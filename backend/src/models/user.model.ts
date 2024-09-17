import mongoose from "mongoose";

type UserSchemaType = {
    name: string,
    email: string,
    password: string
}
const UserSchema = new mongoose.Schema<UserSchemaType>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

export const User = mongoose.model("User", UserSchema)