import "./Login.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="Login">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          <h1>Hello again to your Family</h1>
          <form>
            <div className="input-container">
              <i>
                <MailIcon />
              </i>

              <input type="text" placeholder="Email" />
            </div>{" "}
            <div className="input-container">
              <i>
                <LockIcon />
              </i>

              <input type="text" placeholder="Password" />
            </div>{" "}
            <button>Log In</button>
            <p>
              You don’t Have an account?{" "}
              <span onClick={() => navigate("/register")}>Sign Up</span>
            </p>
          </form>

          <div className="logo">
            <LocalDiningIcon />
            <p className="title">
              Yum<span>Yard</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
