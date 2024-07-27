import "./NavBar.scss";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../context/authContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../../context/darkModeContext";
import { makeRequest } from "../../axios.js";
const NavBar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    });
  }, []);
  const [active, setActive] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { dark, toggle } = useContext(DarkModeContext);
  const handlLogout = async () => {
    try {
      await makeRequest.post("/api/auth/logout  ");
      localStorage.removeItem("user");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const handleLinkClick = (link) => {
    setActive(link);
  };
  return (
    <div className="navBar" data-aos="fade-down">
      <div className="left">
        <LocalDiningIcon />

        <p className="title" onClick={() => navigate("/")}>
          Yum<span>Yard</span>
        </p>
      </div>
      <div className="centre">
        <span
          onClick={() => {
            navigate("/");
            handleLinkClick("home");
          }}
          className={active === "home" ? "active" : ""}
        >
          Home
        </span>
        <span
          onClick={() => {
            navigate("/feed");
            handleLinkClick("Recipes");
          }}
          className={active === "Recipes" ? "active" : ""}
        >
          Recipes
        </span>
        <span
          onClick={() => {
            navigate("/addPage");
            handleLinkClick("addPage");
          }}
          className={active === "addPage" ? "active" : ""}
        >
          Add Recipe
        </span>
      </div>

      <div className="right">
        <div onClick={toggle}>
          {dark ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
        <div
          className="user"
          onClick={() => navigate("/profile/" + currentUser.id)}
        >
          <div className="profile">
            <img
              src={"../../../public/upload/" + currentUser.profile_img}
              alt=""
            />
            <p>{currentUser.username}</p>
          </div>
        </div>
        <button onClick={handlLogout}>Log out</button>
      </div>
    </div>
  );
};

export default NavBar;
