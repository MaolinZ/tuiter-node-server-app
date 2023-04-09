import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    title: String,
    dislikes: Number,
    disliked: Boolean,
    image: String,
    handle: String,
    replies: Number,
    retuits: Number,
    time: String,
    topic: String,
    userName: String
}, {collection: 'tuits'});
export default schema;

