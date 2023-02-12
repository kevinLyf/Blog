import User from "../models/User.js";

export const create = (body) => User.create(body);
export const findUserByEmail = (email) => User.findOne(email);
export const findUserById = (id) => User.findById(id);