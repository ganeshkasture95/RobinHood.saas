import mongoose, { Schema, models } from "mongoose";


const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: URL, required: true },
    firstname: { type: String},
    lastname: { type: String},
    planId: { type: String, default:1},
    creditBalance: { type: Number, default:10 },

}, { timestamps: true })

const User = models?.User || mongoose.model('User', UserSchema)

export default User

