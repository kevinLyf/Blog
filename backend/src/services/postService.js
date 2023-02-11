import Post from "../models/Post.js";

export const create = (body) => Post.create(body);
export const getAllPosts = () => Post.find();