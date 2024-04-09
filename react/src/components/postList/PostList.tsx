import React from "react";
import PostCard from "../postCard/PostCard";
import { PostProps } from "@/types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PostList = async () => {
  const data: PostProps[] = await getData()

  return (
    <div className="postList">
      {data.map((post: PostProps) => (
        <PostCard id={post.id} key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;
