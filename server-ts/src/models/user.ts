import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user'

const UserSchema = new Schema<IUser>({
    name: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ''
    }
},
{
    timestamps: true,
    versionKey: false
})

const UserModel = model('users', UserSchema)
export default UserModel