import "./Post.scss";
import StarRating from "../Rating/StarRating";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Post = ({ post }) => {
  const navigate = useNavigate();
  const { loading, err, data } = useQuery({
    queryKey: ["bookmark"],
    queryFn: async () => {
      try {
        const res = await makeRequest.get("/api/bookmark");

        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (saved) => {
      if (saved) return makeRequest.delete("/api/bookmark?postId=" + post.id);
      return makeRequest.post("/api/bookmark?postId=" + post.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmark"]);
    },
  });
  const handlesave = () => {
    mutation.mutate(data.includes(parseInt(post.id)));
  };

  const { isloading, err: likeErr, data: likeData } = useQuery({
    queryKey: ["likes"],
    queryFn: async() => {
      try {
        const result = await makeRequest.get("/api/likes");
        
        
        return result.data
      } catch (err) {
        console.log(err);
        
      }
    }
  })
  
  const likeMutation = useMutation({
    mutationFn: (saved) => {
      if (saved) return makeRequest.delete("/api/likes?postId="+ post.id);
      return makeRequest.post("/api/likes?postId=" + post.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["likes"]);
    },
  });
  const handleLike = () => {
    console.log("clik");
    
    likeMutation.mutate(likeData.includes(parseInt(post.id)));
  };
  return (
    <div className="Post">
      <div className="container">
        <div className="info">
          <img
            src={"../../public/upload/" + post.recipe_img}
            alt=""
            onClick={() => navigate("/recipes/" + post.id)}
          />
          <div className="bookmark" onClick={handlesave}>
            {data && data.includes(parseInt(post.id)) ? (
              <BookmarkRoundedIcon fontSize="large" />
            ) : (
              <BookmarkBorderIcon fontSize="large" />
            )}
          </div>
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
              <img src={"../../public/upload/" + post.profile_img} alt="" />
              <p>{post.username}</p>
            </div>
            {/* <Button text="Follow" txtColor="white" /> */}
            <div className="like" onClick={handleLike}>
              {likeData && likeData.includes(parseInt(post.id)) ? (
                <FavoriteIcon fontSize="large" />
              ) : (
                <FavoriteBorderIcon fontSize="large" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
