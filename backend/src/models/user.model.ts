import mongoose from "mongoose";

type UserSchemaType = {
    auth0Id: string,
    name?: string,
    email: string,
    password?: string
}
const UserSchema = new mongoose.Schema<UserSchemaType>({
    auth0Id: {
        type: String
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    }

}, { timestamps: true })

export const User = mongoose.model("User", UserSchema)