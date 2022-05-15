import React from "react";
import { IPost } from "../types/post.types";

interface PostCardProps {
  details: IPost;
}
function PostCard({ details }: PostCardProps) {
  const { body, id, title, userId } = details;
  return (
    <div className="shadow-md p-4 w-8 rounded bg-black border-4 border-red-500">
      <div className="text-8xl">PostId: {id}</div>
      <div>Title: {title}</div>
      <div>Body: {body}</div>
      <div>UserId: {userId}</div>
    </div>
  );
}

export default PostCard;
