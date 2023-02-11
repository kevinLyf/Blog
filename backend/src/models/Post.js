import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
  tag: { type: String, required: true },
  createAt: { type: String, required: true },
  banner: { type: String || File, required: true },
});

const Post = mongoose.model('Posts', postSchema);

export default Post;
