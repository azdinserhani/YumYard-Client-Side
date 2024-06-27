import "./Register.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="Register">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          <h1>Want to join our Family</h1>
          <form>
            <div className="input-container">
              <i>
                <PersonIcon />
              </i>

              <input type="text" placeholder="Username" />
              <div className="underline"></div>
            </div>
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
            <div className="input-container">
              <i>
                <LockIcon />
              </i>

              <input type="text" placeholder="Repeat Password" />
            </div>
            <button>Sign Up</button>
          </form>
          <p>
            Already have an acount? <span onClick={()=>navigate("/login")}>Log in</span>
          </p>
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
};
export default Register;
