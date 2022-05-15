import { Action } from "redux";
import { IComment, IPost } from "../../types/post.types";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const SET_ALL_POSTS = "SET_ALL_POSTS";
export const GET_COMMENT_BY_ID = "GET_COMMENT_BY_ID";
export const SET_COMMENT_BY_ID = "SET_COMMENT_BY_ID";
export const SET_POST_BY_ID = "SET_POST_BY_ID";
export const GET_POST_BY_ID = "GET_POST_BY_ID";

interface SetAllPost extends Action<typeof SET_ALL_POSTS> {
  allPost: IPost[];
  isLoading: false;
}

interface SetPostById extends Action<typeof SET_POST_BY_ID> {
  currentPost: IPost;
  isLoading: false;
}

interface SetComment extends Action<typeof SET_COMMENT_BY_ID> {
  comment: IComment[];
  postId: number;
  isLoading: false;
}

export type BlogPostTypes =
  | SetAllPost
  | SetComment
  | SetPostById
  | Action<typeof GET_ALL_POSTS>
  | Action<typeof GET_COMMENT_BY_ID>
  | Action<typeof GET_POST_BY_ID>;
