import "./RecipeModel.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import StarRating from "../../components/Rating/StarRating";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import Button from "../../components/button/Button";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const RecipeModel = () => {
  const postId = parseInt(useLocation().pathname.split("/")[2]);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
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
    ftechData();
  }, [postId]);

  if (!data) return null; // Handle case when data is not available

  // Destructure cooking_time
  const { cooking_time, ingredients, instructions } = data;
  const hours = cooking_time?.hours || "0"; // Default to "0" if hours is undefined
  const minutes = cooking_time?.minutes || "0"; // Default to "0" if minutes is undefined

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
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719420490~exp=1719424090~hmac=1197b1c02ab2f658977727037993f03dd3dfd6ae586af5070f6d217760c779c7&w=826"
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
            <span>{data.comment_count} comment</span>
          </div>
          <div className="item">
            <BookmarkRoundedIcon />
            <span>9 saves</span>
          </div>
          <div className="item">
            <StarRating rating={data.likes_count} />

            <span>{data.likes_count}</span>
          </div>
        </div>
        <hr />
        <div className="main-info">
          <img src={"../../../public/upload/" + data.recipe_img} alt="" />
          <div className="time">
            <p>Cook time:</p>
            <span>
              {hours} hh:{minutes} mm
            </span>
          </div>
          <div className="description">
            <p>{data.description}</p>
          </div>
          <div className="ingrediants">
            <p>Ingrediants: </p>
            {ingredients.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <CheckBoxOutlineBlankRoundedIcon />
                  <span>{item}</span>
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
        <div className="comment">
          <p>Comments</p>
          <hr />
          <div className="add-comment">
            <div className="profile">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719420490~exp=1719424090~hmac=1197b1c02ab2f658977727037993f03dd3dfd6ae586af5070f6d217760c779c7&w=826"
                alt=""
              />
              <span>Az-eddine Serhani</span>
            </div>
            <form>
              <input type="text" placeholder="Add Comment" />
              <Button text={"Comment"} />
            </form>
          </div>
          <div className="comments-list">
            <div className="profile">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719420490~exp=1719424090~hmac=1197b1c02ab2f658977727037993f03dd3dfd6ae586af5070f6d217760c779c7&w=826"
                alt=""
              />
              <div className="inf">
                <span>Az-eddine Serhani</span>
                <span className="time">40 min ago</span>
              </div>
            </div>
            <p>
              Excellent recipe. I served this tonight for dinner and my family
              loved it.
            </p>
          </div>
          <div className="comments-list">
            <div className="profile">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719420490~exp=1719424090~hmac=1197b1c02ab2f658977727037993f03dd3dfd6ae586af5070f6d217760c779c7&w=826"
                alt=""
              />
              <div className="inf">
                <span>Az-eddine Serhani</span>
                <span className="time">40 min ago</span>
              </div>
            </div>
            <p>
              Excellent recipe. I served this tonight for dinner and my family
              loved it.
            </p>
          </div>
          <div className="comments-list">
            <div className="profile">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719420490~exp=1719424090~hmac=1197b1c02ab2f658977727037993f03dd3dfd6ae586af5070f6d217760c779c7&w=826"
                alt=""
              />
              <div className="inf">
                <span>Az-eddine Serhani</span>
                <span className="time">40 min ago</span>
              </div>
            </div>
            <p>
              Excellent recipe. I served this tonight for dinner and my family
              loved it.
            </p>
          </div>
        </div>
      </div>
    )
  );
};
export default RecipeModel;
