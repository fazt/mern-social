import { connectDB } from "../src/db";
import PostModel from "../src/models/Post.model";
import { connection } from "mongoose";
import { faker } from "@faker-js/faker";

connectDB();

export default async function seedPosts(postsQuantity: number = 10) {
  const posts = [];

  for (let i = 0; i < postsQuantity; i++) {
    posts.push({
      title: faker.lorem.sentence(Math.floor(Math.random() * 10) + 1),
      description: faker.lorem.paragraphs(Math.floor(Math.random() * 10) + 1),
      image: faker.image.imageUrl(300, 300, "people", true),
    });
  }

  await PostModel.insertMany(posts);

  connection.close();
}

seedPosts();
