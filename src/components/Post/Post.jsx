import "./Post.scss";
import StarRating from "../Rating/StarRating";
import Button from "../button/Button";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <div className="container">
        <img src={post.recipeImg} alt="" />
        <div className="info">
          <div className="action">
            <StarRating rating={post.avrgRating} />

            <p>{post.recipeTitle}</p>
          </div>
          <div className="user">
            <div className="profile">
              <img src={post.authaurImg} alt="" />
              <p>{post.authaurName}</p>
            </div>

            <Button text="Follow" txtColor="white"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
