import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CommentCard from "../component/CommentCard";
import Title from "../component/Title";
import { getCommentbyId, getPostById } from "../store/actions/blog.actions";
import { AppState } from "../store/reducers";

function Post() {
  const { postId } = useParams();
  const post = useSelector((state: AppState) => state.posts.currentPost);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostById(Number(postId)));
  }, []);

  const commentsMapper = useSelector(
    (state: AppState) => state.posts.allPostsComments
  );
  const comments = useMemo(() => {
    const postIdKey = Number(postId);
    return postIdKey && commentsMapper ? commentsMapper[postIdKey] : [];
  }, [commentsMapper]);

  const handleOnLoadComment = (e: any) => {
    dispatch(getCommentbyId(Number(postId)));
  };
  return (
    <div className="bg-slate-100">
      <Title documentTitle={post.title} />

      <div className="flex justify-center mx-auto p-10 w-full">
        <div className="rounded border p-5 w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 hover:shadow-md">
          <Link className="py-3 px-4 shadow-md" to="/posts">
            Back
          </Link>

          <div className="mt-2 px-3 pb-2">
            <div className="pt-2">
              <div className="text-center font-bold capitalize text-xl">
                {post.title}
              </div>
              <span className="text-sm text-gray-400 font-medium">
                Post Id:
                <span className="font-semibold">{post.id}</span>
              </span>
              <div className="text-sm text-black font-bold">
                User Id:
                <span className="font-semibold">{post.userId}</span>
              </div>
            </div>

            <div className="mb-8 mx-4 mt-3">
              <div className="mb-2 text-lg">{post.body}</div>
            </div>
            <div>
              <div className="font-semibold">Comments</div>
              {!comments && (
                <button
                  type="button"
                  onClick={handleOnLoadComment}
                  className="rounded-md shadow-md px-4 py-2 text-xs hover:shadow-lg transition-all"
                >
                  Load Comments
                </button>
              )}
              <div className="overscroll-auto overflow-y-auto h-full">
                {comments &&
                  comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
