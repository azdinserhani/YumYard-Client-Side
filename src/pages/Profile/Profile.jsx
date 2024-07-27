import "./Profile.scss";
import Button from "../../components/button/Button";
import Posts from "../../components/Posts/Posts";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";
import Aos from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const [update, setUpdate] = useState(false);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const [userData, setUserData] = useState();
  const { currentUser } = useContext(AuthContext);

  const { isLoading, err, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await makeRequest.get("/api/users/find/" + userId);
      // Log API response
      console.log(res.data);
      
      setUserData(res.data);
    },
    // onSuccess: () => {
      
    // },
  });
    useEffect(() => {
      Aos.init({
        duration: 1500,
        once: true,
      });
    }, []);
  const handleDataUpdate = (newData) => {
    setUserData(newData);
  }
  
  return (
    <div className="profile" data-aos="fade-up">
      {isLoading ? (
        "loading"
      ) : (
        <div className="main-info">
          <img
            src={userData && "../../../public/upload/" + userData.profile_img}
          />
          <div className="user-profile">
            <h1>{userData && userData.username}</h1>
            <div className="follow">
              <span>20 Recipes</span>
              <span>100 Followers</span>
              <span>150 Following</span>
            </div>
            {currentUser.id == userId ? (
              <div onClick={() => setUpdate(true)}>
                <Button text="Edit" className="btn" />
              </div>
            ) : (
              <Button text="Follow" className="btn" />
            )}
          </div>
        </div>
      )}

      <hr />
      <h2>Shared Recipes</h2>
      <div className="post">
        <Posts />
      </div>
      {update && (
        <Update
          setUpdate={setUpdate}
          data={userData}
          onUserDataUpdate={handleDataUpdate}
        />
      )}
    </div>
  );
};

export default Profile;
