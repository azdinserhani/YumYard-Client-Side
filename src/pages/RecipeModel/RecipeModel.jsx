import "./RecipeModel.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import StarRating from "../../components/Rating/StarRating";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../context/authContext";
import Comments from "../../components/comments/Comments";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "../../components/button/Button";

const RecipeModel = () => {
  const postId = parseInt(useLocation().pathname.split("/")[2]);
  const [data, setData] = useState(null);
  const [checkItem, setCheckItem] = useState([]);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [commentLength, setCommentLength] = useState(0);
  const { currentUser } = useContext(AuthContext);
  const [savedNumber, setSavedNumber] = useState(0);
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  useEffect(() => {
    const ftechData = async () => {
      try {
        const res = await makeRequest.get("/api/posts/" + postId);

        setData(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    const getNumberOfSave = async () => {
      try {
        const res = await makeRequest.get("/api/bookmark/post/" + postId);

        setSavedNumber(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    ftechData();
    getNumberOfSave();
  }, [postId]);

  const handkleCheck = (index) => {
    const newCheckItem = [...checkItem];
    newCheckItem[index] = !newCheckItem[index];
    setCheckItem(newCheckItem);
  };

  const {
    loading,
    err,
    data: savedData,
  } = useQuery({
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
  //start rating part
  const {
    loading: ratingLoad,
    err: errRating,
    data: ratingData,
  } = useQuery({
    queryKey: ["rating"],
    queryFn: async () => {
      try {
        const res = await makeRequest.get("/api/rating?postId="+postId);
        console.log(res.data);
        
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  //end rating part

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (saved) => {
      if (saved) return makeRequest.delete("/api/bookmark?postId=" + postId);
      return makeRequest.post("/api/bookmark?postId=" + postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmark"]);
    },
  });
  const handlesave = () => {
    mutation.mutate(savedData.includes(parseInt(postId)));
  };

   const ratingMutation = useMutation({
     mutationFn: (newRating) => {
       
       return makeRequest.post("/api/rating",newRating);
     },
     onSuccess: () => {
       queryClient.invalidateQueries(["rating"]);
     },
   });
  const handlerating = () => {
     const rate = parseInt(rating)
     ratingMutation.mutate({postId,rating:rate});
   };
  if (!data) return null; // Handle case when data is not available

  const { instructions, ingredients } = data;
  return (
    data && (
      <div className="RecipeModel" data-aos="fade-up">
        <p>
          Home &#62; <i onClick={() => navigate("/feed")}>Recipe &#62;</i>{" "}
          <span>{data.title}</span>
        </p>
        <h2>{data.title}</h2>
        <div className="detail">
          <div
            className="profile"
            onClick={() => navigate("/profile/" + data.user_id)}
          >
            <img
              src={"../../../public/upload/" + currentUser.profile_img}
              alt=""
            />
            <span>{data.username}</span>
          </div>
          <div className="item">
            <CalendarMonthOutlinedIcon />
            <span>{new Date(data.created_datetime).toLocaleDateString()}</span>
          </div>
          <div className="item">
            <InsertCommentRoundedIcon />
            <span>{commentLength} comment</span>
          </div>
          <div className="item">
            <BookmarkRoundedIcon />
            <span>{savedNumber} saves</span>
          </div>
          <div className="item">
            <StarRating rating={ratingData.average_rating} />

            <span>{data.likes_count}</span>
          </div>
        </div>
        <hr />
        <div className="main-info">
          <div className="image">
            <img src={"../../../public/upload/" + data.recipe_img} alt="" />
            <div className="bookmark" onClick={handlesave}>
              {savedData && savedData.includes(parseInt(postId)) ? (
                <BookmarkRoundedIcon fontSize="large" />
              ) : (
                <BookmarkBorderIcon fontSize="large" />
              )}
            </div>
          </div>

          <div className="rating-area">
            <div className="time">
              <p>Cook time:</p>
              <span>
                {data.cooking_time_hours} hh:{data.cooking_time_minutes} mm
              </span>
            </div>
            <div className="rating">
              <p>Leave a rating:</p>
              <select
                name="rating"
                value={rating}
                onChange={(e) =>
                  setRating(   e.target.value )
                }
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <div onClick={handlerating}><Button text={ "submit" } /></div>
              
            </div>
          </div>
          <div className="description">
            <p>{data.description}</p>
          </div>
          <div className="ingrediants">
            <p>Ingrediants: </p>
            {ingredients.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {checkItem[index] ? (
                    <CheckBoxRoundedIcon onClick={() => handkleCheck(index)} />
                  ) : (
                    <CheckBoxOutlineBlankRoundedIcon
                      onClick={() => handkleCheck(index)}
                    />
                  )}

                  <span
                    style={
                      checkItem[index]
                        ? { textDecoration: "line-through", color: "gray" }
                        : {}
                    }
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="instructions">
            <p>Instructions:</p>
            {instructions.map((item, index) => {
              return (
                <div className="item">
                  <span className="num">{index + 1}</span>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="sec" />
        <Comments postId={postId} setCommentLength={setCommentLength} />
      </div>
    )
  );
};
export default RecipeModel;
