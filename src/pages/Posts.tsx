import React from "react";
import PostCard from "../component/PostCard";
import { IPost } from "../types/post.types";

const posts: IPost[] = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];
function Posts() {
  return (
    <div className="w-full h-full bg-red-200">
      {posts.map((post) => (
        <PostCard key={post.id} details={post} />
      ))}
    </div>
  );
}

export default Posts;
