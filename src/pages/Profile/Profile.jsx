import "./Profile.scss";
import Button from "../../components/button/Button";
import Posts from "../../components/Posts/Posts";
import { useLocation } from "react-router-dom";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
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
  const currentId = parseInt(currentUser.id);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const [RecipeCount, setRecipeCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const { isLoading, err, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await makeRequest.get("/api/users/find/" + userId);

      setUserData(res.data);
    },
  });
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
    const fetchData = async () => {
      try {
        const resRecipe = await makeRequest.get("/api/posts?userId=" + userId);
        const resFollow = await makeRequest.get("/api/relation/" + userId);
        console.log("following: " + resFollow.data.length);
        setRecipeCount(resRecipe.data.length);
        setFollowingCount(resFollow.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleDataUpdate = (newData) => {
    setUserData(newData);
  };
  //handl following system

  const {
    isLoading: rLoading,
    err: rErr,
    data: RelationData,
  } = useQuery({
    queryKey: ["relationships"],
    queryFn: async () => {
      const res = await makeRequest.get(
        "/api/relation?followedUserId=" + userId
      );
      setIsFollowing(res.data.includes(currentId));
      setFollowerCount(res.data.length);
      return res.data;
    },
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (following) => {
      if (following)
        return makeRequest.delete("/api/relation?userId=" + userId);
      return makeRequest.post("/api/relation", { userId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["relationships"]);
    },
  });

  const handleFollow = () => {
    setFollowerCount((prev) => (isFollowing ? prev - 1 : prev + 1));
    setIsFollowing(!isFollowing);
    mutation.mutate(isFollowing);
  };
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
              <span>{RecipeCount} Recipes</span>
              <span>{followerCount} Followers</span>
              <span>{followingCount} Following</span>
            </div>
            {currentId === userId ? (
              <div onClick={() => setUpdate(true)}>
                <Button text="Edit" className="btn" />
              </div>
            ) : (
              <div onClick={handleFollow}>
                <Button
                  text={isFollowing ? "Following" : "Follow"}
                  className="btn"
                />
              </div>
            )}
          </div>
        </div>
      )}

      <hr />
      <h2>Shared Recipes</h2>
      <div className="post">
        <Posts userId={userId} />
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
