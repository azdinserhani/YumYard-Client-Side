import "./Post.scss";
import StarRating from "../Rating/StarRating";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div className="Post">
      <div className="container">
        <div className="info">
          <img
            src={"../../public/upload/" + post.recipe_img}
            alt=""
            onClick={() => navigate("/recipes/" + post.id)}
          />
          <div
            className="action"
            onClick={() => navigate("/recipes/" + post.id)}
          >
            <StarRating rating={post.avrgRating} key={post.div} />

            <p>{post.title}</p>
          </div>
          <div className="user">
            <div
              className="profile"
              onClick={() => navigate("/profile/" + post.user_id)}
            >
              <img src={"../../public/upload/"+post.profile_img} alt="" />
              <p>{post.username}</p>
            </div>
            <Button text="Follow" txtColor="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
