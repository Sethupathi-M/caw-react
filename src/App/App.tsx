import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="*" element={<Navigate to="posts" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
