import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/createPost";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Posts from "./pages/Posts";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
