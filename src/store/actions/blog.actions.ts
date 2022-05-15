import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  getAllPost,
  getPostbyId,
  getCommentsbyPostId,
} from "../../api/blog.api";
import { IComment, IPost } from "../../types/post.types";
import { AppState } from "../reducers";
import {
  BlogPostTypes,
  GET_ALL_POSTS,
  GET_COMMENT_BY_ID,
  GET_POST_BY_ID,
  SET_ALL_POSTS,
  SET_COMMENT_BY_ID,
  SET_POST_BY_ID,
} from "../types/blog.types";

export const getPosts = (): ThunkAction<void, AppState, null, Action> => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_POSTS,
    });

    getAllPost().then((posts) => dispatch(setAllPost(posts)));
  };
};

export const getPostById = (
  postId: number
): ThunkAction<void, AppState, null, Action> => {
  return (dispatch, getState) => {
    const state = getState();
    debugger;
    const post = state.posts.allPosts.find((item) => item.id === postId);
    dispatch({
      type: GET_POST_BY_ID,
    });
    if (post) dispatch(setCurrentPost(post));
    else getPostbyId(postId).then((post) => dispatch(setCurrentPost(post)));
  };
};

export const getCommentbyId = (
  postId: number
): ThunkAction<void, AppState, null, Action> => {
  return (dispatch, getState) => {
    const state = getState();
    const isCommentExist = state.posts.allPostsComments[postId];

    if (!isCommentExist) {
      dispatch({
        type: GET_COMMENT_BY_ID,
      });
      getCommentsbyPostId(postId).then((comment) =>
        dispatch(setComment(comment, postId))
      );
    }
  };
};

export const setAllPost = (posts: IPost[]): BlogPostTypes => ({
  type: SET_ALL_POSTS,
  allPost: posts,
  isLoading: false,
});
export const setCurrentPost = (currentPost: IPost): BlogPostTypes => ({
  type: SET_POST_BY_ID,
  currentPost: currentPost,
  isLoading: false,
});

export const setComment = (
  comment: IComment[],
  postId: number
): BlogPostTypes => ({
  type: SET_COMMENT_BY_ID,
  comment: comment,
  postId: postId,
  isLoading: false,
});
