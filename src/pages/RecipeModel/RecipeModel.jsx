import "./RecipeModel.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import StarRating from "../../components/Rating/StarRating";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import Button from "../../components/button/Button";
const RecipeModel = () => {
  return (
    <div className="RecipeModel">
      <p>
        Home &#62; Recipe &#62; <span>Onion round</span>
      </p>
      <h2>Onion round</h2>
      <div className="detail">
        <div className="profile">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719420490~exp=1719424090~hmac=1197b1c02ab2f658977727037993f03dd3dfd6ae586af5070f6d217760c779c7&w=826"
            alt=""
          />
          <span>Az-eddine Serhani</span>
        </div>
        <div className="item">
          <CalendarMonthOutlinedIcon />
          <span>Seb 26,2023</span>
        </div>
        <div className="item">
          <InsertCommentRoundedIcon />
          <span>22 comment</span>
        </div>
        <div className="item">
          <BookmarkRoundedIcon />
          <span>9 saves</span>
        </div>
        <div className="item">
          <StarRating rating={4} />

          <span>4</span>
        </div>
      </div>
      <hr />
      <div className="main-info">
        <img
          src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="time">
          <p>Cook time:</p>
          <span>5 mins</span>
        </div>
        <div className="description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="ingrediants">
          <p>Ingrediants: </p>
          <div className="item">
            <CheckBoxOutlineBlankRoundedIcon />
            <span>4 skinless, boneless chicken breast halves</span>
          </div>
          <div className="item">
            <CheckBoxRoundedIcon />
            <span>4 skinless, boneless chicken breast halves</span>
          </div>
          <div className="item">
            <CheckBoxOutlineBlankRoundedIcon />
            <span>4 skinless, boneless chicken breast halves</span>
          </div>
        </div>
        <div className="instructions">
          <p>Instructions:</p>
          <div className="item">
            <span className="num">1</span>
            <span>
              Preheat the oven to 350 degrees F (175 degrees C). Lightly grease
              a medium baking dish.
            </span>
          </div>
          <div className="item">
            <span className="num">2</span>
            <span>
              Preheat the oven to 350 degrees F (175 degrees C). Lightly grease
              a medium baking dish.
            </span>
          </div>
          <div className="item">
            <span className="num">3</span>
            <span>
              Preheat the oven to 350 degrees F (175 degrees C). Lightly grease
              a medium baking dish.
            </span>
          </div>
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
  );
};
export default RecipeModel;
