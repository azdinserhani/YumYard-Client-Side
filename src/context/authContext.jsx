import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        inputs,
        {
          withCredentials: true,
        }
      );

      console.log(res.status);
      if (res.status === 200) {
        toast.success("Login success", {
          autoClose: 2000,
        });
        setCurrentUser(res.data);
      }
    } catch (err) {
      if (err.response.status === 400) {
        toast.error("wrong Password", {
          autoClose: 2000,
        });
      } else if (err.response.status === 409) {
        toast.error("user Not Found", {
          autoClose: 2000,
        });
      } else if (err.response.status === 500) {
        toast.error("Something was Wrong try again later", {
          autoClose: 2000,
        });
      }
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, status }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
