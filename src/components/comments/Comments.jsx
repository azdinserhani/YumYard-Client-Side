import Button from "../../components/button/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";
import "aos/dist/aos.css";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");

  //coment data
  const {
    isLoading,
    err,
    data: commentData,
  } = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      try {
        const res = await makeRequest.get("/api/comments?postId=" + postId);

        return res.data;
      } catch (err) {
        throw new Error("error fetxhing comments");
      }
    },
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (newComment) => {
      try {
        await makeRequest.post("/api/comments", newComment);
      } catch (err) {
        console.log(err);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comment"]);
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ postId, text });
    setText("");
  };
  return (
    <div className="comment">
      <p>Comments</p>
      <hr />
      <div className="add-comment">
        <div className="profile">
          <img
            src={"../../../public/upload/" + currentUser.profile_img}
            alt=""
          />
          <span>{currentUser.username}</span>
        </div>
        <form onSubmit={handleClick}>
          <input
            type="text"
            value={text}
            placeholder="Add Comment"
            name="text"
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <Button text={"Comment"} type="submit" />
          </div>
        </form>
      </div>
      {commentData &&
        commentData.map((coment, i) => {
          return (
            <div className="comments-list" key={i}>
              <div className="profile">
                <img
                  src={"../../../public/upload/" + coment.profile_img}
                  alt=""
                />
                <div className="inf">
                  <span>{coment.username}</span>
                  <span className="time">
                    {moment(coment.created_time).fromNow()}
                  </span>
                </div>
              </div>
              <p>{coment.comment_text}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Comments;

