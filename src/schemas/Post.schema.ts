import { z } from "zod";

export const CreatePostSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export type CreatePostSchemaType = z.infer<typeof CreatePostSchema>["body"];
