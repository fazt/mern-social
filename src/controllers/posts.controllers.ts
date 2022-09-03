import { Request, Response } from "express";
import PostModel from "../models/Post.model";

export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = await PostModel.create(req.body);
    res.json(newPost);
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = async (req: Request, res: Response) => {
  const posts = await PostModel.find({});
  return res.json(posts);
};

export const updatePost = async (req: Request, res: Response) => {
  res.send("Creating post");
};

export const deletePost = async (req: Request, res: Response) => {
  res.send("Creating post");
};

export const getPost = async (req: Request, res: Response) => {
  res.send("Creating post");
};
