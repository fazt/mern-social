import { useState } from "react";
import { AiOutlineComment, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Post {
  _id: string;
  title: string;
  description: string;
  image?: string;
}

interface Props {
  post: Post;
}

export function Post({ post }: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <div key={post._id} className="bg-neutral-900 p-4">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <img src={post.image} alt="" />
      <p>{new Date().toLocaleString()}</p>
      <p>{post.description?.substring(0, 100) + "..."}</p>
      <div className="flex justify-end gap-x-2">
        <div className="flex items-center">
          <span>53</span>
          {liked ? (
            <AiFillHeart onClick={() => setLiked(false)} />
          ) : (
            <AiOutlineHeart onClick={() => setLiked(true)} />
          )}
        </div>

        <div className="flex items-center">
          <span>10</span>
          <AiOutlineComment />
        </div>
      </div>
    </div>
  );
}
