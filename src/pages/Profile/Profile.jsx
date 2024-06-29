import "./Profile.scss";
import Button from "../../components/button/Button";
import Posts from "../../components/Posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="main-info">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719420490~exp=1719424090~hmac=1197b1c02ab2f658977727037993f03dd3dfd6ae586af5070f6d217760c779c7&w=826"
          alt=""
        />
        <div className="user-profile">
          <h1>Az-eddine serhani</h1>
          <div className="follow">
            <span>20 Recipes</span>
            <span>100 Followers</span>
            <span>150 Following</span>
          </div>
          <Button text="Follow" className="btn" />
        </div>
      </div>
      <hr />
      <h2>Shared Recipes</h2>
      <div className="post">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
