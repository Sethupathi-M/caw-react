import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../types/post.types";

interface PostCardProps {
  details: IPost;
}
function PostCard({ details }: PostCardProps) {
  const { body, id, title, userId } = details;
  return (
    <Link to={`/posts/${id}`}>
      <div className="shadow-md p-4 rounded hover:shadow-slate-400 hover:shadow-lg transition-all hover:scale-105 bg-amber-50 h-full">
        <div className="text-sm">
          Post: <span className="font-bold">{id}</span>
        </div>
        <div className="font-bold mb-3 text-center capitalize">{title}</div>
        <div className="italic text-ellipsis overflow-hidden text-xs truncate">
          {body}
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
