import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../component/PostCard";
import Title from "../component/Title";
import { getPosts } from "../store/actions/blog.actions";
import { AppState } from "../store/reducers";

function Posts() {
  const [searchKey, setSearchKey] = useState("");
  const allPost = useSelector((state: AppState) => state.posts.allPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filtered = useMemo(() => {
    if (searchKey !== "" && searchKey?.length > 0) {
      return allPost.filter((post) =>
        post.title.includes(searchKey.toLowerCase())
      );
    }
    return allPost;
  }, [allPost, searchKey]);

  const handleOnChange = (e: any) => setSearchKey(e.target.value);

  return (
    <>
      <Title documentTitle="Posts" />
      <div className="bg-slate-100">
        <div className="container mx-auto p-5 100 h-screen">
          <div className="flex justify-center mb-10">
            <label className="sr-only">Search</label>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-2/3 border h-14 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for titles..."
              type="text"
              onChange={handleOnChange}
              name="search"
            />
          </div>

          <div className="">
            <div className="grid gap-4 grid-flow-row-dense xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {filtered?.length > 0 &&
                filtered.map((post) => (
                  <PostCard key={post.id} details={post} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
