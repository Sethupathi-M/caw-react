import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  let { postId } = useParams();

  return <div>{postId}</div>;
}

export default Post;
