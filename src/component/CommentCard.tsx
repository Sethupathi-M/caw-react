import React from "react";
import { IComment } from "../types/post.types";

interface CommentCardProps {
  comment: IComment;
}
function CommentCard({ comment }: CommentCardProps) {
  const { email, body, name } = comment;
  return (
    <>
      <div>
        <div>
          <span className="text-xs font-semibold capitalize">
            {name.slice(0, 15)}
          </span>
          {" - "}
          <span className="text-xs font-semibold">[{email}]</span>
        </div>
        <div className="mb-2 text-xs">{body}</div>
      </div>
    </>
  );
}

export default CommentCard;
