import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    age: {
        type: Number,
        min: 0
    },
    parentId: {
        type: String,   // <-- now it can store any string ID
        default: null
    }
}, { timestamps: true });

const Member = mongoose.model('Member', memberSchema);

export default Member;
