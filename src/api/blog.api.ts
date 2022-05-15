import axios from "axios";
import { IComment, IPost } from "../types/post.types";
import { baseUrl } from "./api.config";

export const getAllPost = async () => {
  const url = `${baseUrl}/posts`;
  let posts: IPost[] = (await axios.get<IPost[]>(url)).data;
  return posts;
};

export const getPostbyId = async (postId: number) => {
  const url = `${baseUrl}/posts/${postId}`;
  let post: IPost = (await axios.get<IPost>(url)).data;
  return post;
};

export const getCommentsbyPostId = async (postId: number) => {
  const url = `${baseUrl}/comments?postId=${postId}`;
  let comments: IComment[] = (await axios.get<IComment[]>(url)).data;
  return comments;
};
