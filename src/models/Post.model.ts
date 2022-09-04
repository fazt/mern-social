import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Post {
  @prop({
    required: true,
    trim: true,
  })
  title: string;

  @prop({
    trim: true,
  })
  description: string;

  @prop()
  image: string;

  @prop({
    default: 0,
  })
  likes: number;

  @prop()
  author: string;
}

const PostModel = getModelForClass(Post);
export default PostModel;
