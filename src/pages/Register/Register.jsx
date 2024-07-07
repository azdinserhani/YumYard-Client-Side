import "./Register.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    repPassword: "",
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const { repPassword, ...other } = inputs;
      
      await axios.post("http://localhost:3000/api/auth/register", other);
      navigate("/login");
    } catch (err) {
      setErr(err);
    }
  };
  if (err) {
    console.log(err);
  }
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

              <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="username"
              />
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <i>
                <MailIcon />
              </i>

              <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
              />
            </div>{" "}
            <div className="input-container">
              <i>
                <LockIcon />
              </i>

              <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
                name="password"
              />
            </div>{" "}
            <div className="input-container">
              <i>
                <LockIcon />
              </i>

              <input
                type="text"
                placeholder="Repeat Password"
                onChange={handleChange}
                name="repPassword"
              />
            </div>
            <button onClick={inputs.password === inputs.repPassword ? handleClick : console.log("wrong")}>Sign Up</button>
          </form>
          <p>
            Already have an acount?{" "}
            <span onClick={() => navigate("/login")}>Log in</span>
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
