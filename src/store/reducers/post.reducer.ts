import { PostCommentMapper, IPost } from "../../types/post.types";
import {
  BlogPostTypes,
  GET_ALL_POSTS,
  GET_COMMENT_BY_ID,
  GET_POST_BY_ID,
  SET_ALL_POSTS,
  SET_COMMENT_BY_ID,
  SET_POST_BY_ID,
} from "../types/blog.types";

export interface BlogPostState {
  allPosts: IPost[];
  isLoading: boolean;
  currentPost: IPost;
  allPostsComments: PostCommentMapper;
}

const initialState = {
  allPosts: [],
  isLoading: false,
  currentPost: { userId: 0, id: 0, title: "", body: "" },
  allPostsComments: {},
};
export const postReducer = (
  state: BlogPostState = initialState,
  action: BlogPostTypes
): BlogPostState => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, isLoading: true };

    case SET_ALL_POSTS:
      return { ...state, allPosts: action.allPost, isLoading: false };

    case GET_COMMENT_BY_ID:
      return { ...state, isLoading: true };

    case SET_COMMENT_BY_ID:
      return {
        ...state,
        isLoading: false,
        allPostsComments: {
          ...state.allPostsComments,
          [action.postId]: action.comment,
        },
      };

    case GET_POST_BY_ID:
      return {
        ...state,
        isLoading: true,
      };

    case SET_POST_BY_ID:
      return {
        ...state,
        isLoading: false,
        currentPost: action.currentPost,
      };
    default:
      return state;
  }
};
