import "./Login.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { ThreeDots } from "react-loader-spinner";
import Aos from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [hide, setHide] = useState(true);
  const [err, setErr] = useState(null);
  const [loading, setloading] = useState(false);
    useEffect(() => {
      Aos.init({
        duration: 1500,
        once: true,
      });
    }, []);
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

      setloading(false);

      navigate("/");
    } catch (err) {
      setErr(err);
    }
  };
  return (
    <div className="Login">
      <div className="card">
        <div className="left" data-aos="fade-down"></div>
        <div className="right">
          <h1 data-aos="fade-up">Hello again to your Family</h1>
          <form>
            <div className="input-container" data-aos="fade-up">
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
            <div className="input-container" data-aos="fade-up">
              <i>
                <LockIcon />
              </i>

              <input
                type={hide ? "password" : "text"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {hide ? (
                <VisibilityIcon onClick={() => setHide(!hide)} />
              ) : (
                <VisibilityOffIcon onClick={() => setHide(!hide)} />
              )}
            </div>{" "}
            <button onClick={handleLogin} disabled={loading} data-aos="fade-up">
              {loading ? (
                <div className="spenner">
                  <ThreeDots color="white" height={80} width={80} />
                </div>
              ) : (
                "Log in"
              )}
            </button>
            <p data-aos="fade-left">
              You don’t Have an account?{" "}
              <span onClick={() => navigate("/register")}>Sign Up</span>
            </p>
          </form>

          <div className="logo">
            <LocalDiningIcon />
            <p className="title" data-aos="fade-right">
              Yum<span>Yard</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
