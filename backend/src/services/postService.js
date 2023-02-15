import Post from "../models/Post.js";

export const create = (body) => Post.create(body);
export const getAllPosts = () => Post.find();
export const getOnePostById = (id) => Post.findById(id);
export const deletePostById = (id) => Post.findByIdAndDelete(id);