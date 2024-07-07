import "./Post.scss";
import StarRating from "../Rating/StarRating";
import Button from "../button/Button";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <div className="container">
        <img src={post.recipe_img} alt="" />
        <div className="info">
          <div className="action">
            <StarRating rating={post.avrgRating} />

            <p>{post.title}</p>
          </div>
          <div className="user">
            <div className="profile">
              <img src={post.profile_img} alt="" />
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
