// getPosts
// getPostbyId

import axios from "axios";
import { baseUrl } from "./config";

export const getAllPost = async () => {
  const url = `${baseUrl}/posts`;

  axios.get(url).then((response) => console.log(response));
};
