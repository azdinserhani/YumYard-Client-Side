import "./NavBar.scss";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../context/authContext";
const NavBar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navBar" data-aos="fade-down">
      <div className="left">
        <LocalDiningIcon />

        <p className="title" onClick={() => navigate("/")}>
          Yum<span>Yard</span>
        </p>
      </div>
      <div className="centre">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/feed")}>Recipes</span>
        <span onClick={() => navigate("/addPage")}>Add Recipe</span>
      </div>

      <div className="right">
        
          <div className="user" onClick={()=> navigate("/profile")}>
            <div className="profile">
              <img src={currentUser.profilepic} alt="" />
              <p>{currentUser.username}</p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default NavBar;
