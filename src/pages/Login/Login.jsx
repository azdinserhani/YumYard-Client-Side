import "./Login.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { ThreeDots } from "react-loader-spinner";


const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      await login(inputs);
      console.log("cliked");
      setTimeout(() => {
        setloading(false);
      }, 2000);
      navigate("/");
    } catch (err) {
      setErr(err);
    }
  };
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

              <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleChange}
              />
            </div>{" "}
            <div className="input-container">
              <i>
                <LockIcon />
              </i>

              <input
                type="text"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>{" "}
            <button onClick={handleLogin} disabled={loading}>
              {loading ? (
                <div className="spenner">
                  <ThreeDots color="white" height={80} width={80} />
                </div>
              ) : (
                "Log in"
              )}
            </button>
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
};

export default Login;
