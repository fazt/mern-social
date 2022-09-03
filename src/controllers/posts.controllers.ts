import { Request, Response } from "express";
import PostModel from "../models/Post.model";

export const createPost = async (req: Request, res: Response) => {
  const newPost = await PostModel.create(req.body);
  res.json(newPost);
};

export const getPosts = async (req: Request, res: Response) => {
  const posts = await PostModel.find({}).sort({ createdAt: -1 });
  return res.json(posts);
};

export const updatePost = async (req: Request, res: Response) => {
  res.send("Creating post");
};

export const deletePost = async (req: Request, res: Response) => {
  res.send("Creating post");
};

export const getPost = async (req: Request, res: Response) => {
  const postFound = await PostModel.findById(req.params.id);

  if (!postFound) return res.sendStatus(404);

  return res.json(postFound);
};
