import "./NavBar.scss";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Link ,useNavigate} from "react-router-dom";
import Button from "../button/Button";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
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
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
        <Link to="/register">
          <Button text="Sign Up" txtColor="white"/>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
