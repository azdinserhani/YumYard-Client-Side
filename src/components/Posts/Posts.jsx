import "./Posts.scss";
import Post from "../Post/Post.jsx";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios.js";

const Posts = () => {
  const { isLoading, err, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await makeRequest.get("/api/posts");
        console.log("API Response:", res.data); // Log API response
        return res.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error("Error fetching posts");
      }
    },
  });
  return (
    <div className="Posts">
      {err
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data && data.map((items) => <Post post={items} key={items.id} />)}
    </div>
  );
};
export default Posts;
