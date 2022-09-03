import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../app/features/posts/postsSlices";
import { AppDispatch, RootState } from "../app/store";
import { useSelector } from "react-redux";

function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const posts: any = useSelector<RootState>((state) => state.postReducer.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {posts.map((post: any) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
