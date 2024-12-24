import mongoose, { Schema, Document } from 'mongoose';

// Define the User interface
export interface IUser extends Document {
    email: string;
    password: string;
    name: string;
}

// Define the User schema
const UserSchema: Schema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Create and export the User model
const User = mongoose.model<IUser>('User', UserSchema);
export default User;
