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

  // author
}

const PostModel = getModelForClass(Post);
export default PostModel;
