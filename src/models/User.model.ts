import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import bcrypt from "bcrypt";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class User {
  @prop({ required: true })
  public firstname: string;

  @prop({ required: true })
  public lastname: string;

  @prop({ required: true, unique: true, trim: true })
  public email: string;

  @prop({ required: true })
  public password: string;

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
}

export default getModelForClass(User);
