import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../app/features/posts/postsSlices";
import { AppDispatch, RootState } from "../app/store";
import { useSelector } from "react-redux";
import { Post } from "../components/Post";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const posts: any = useSelector<RootState>((state) => state.postReducer.posts);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="grid grid-cols-7 gap-4">
      <div className="col-span-5">
        <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold py-4">For you</h1>
        <Button onClick={() => navigate('/create-post')}>New Post</Button>
        </header>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post: any) => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
      </div>
      <div className="col-span-2">
        <div className="bg-gray-900 p-4  sticky top-4">
          <h1>Profile</h1>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
