import { useEffect, useState } from "react";
import countries from "../../contry";
import "./Update.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Link, useNavigate } from "react-router-dom";

const Update = ({ setUpdate, data, onUserDataUpdate }) => {
  const [profileimg, setProfileimg] = useState(data.profile_img || null);
  const [inputs, setInputs] = useState({
    username: data.username,
    email: data.email,
    country: data.country,
    date_of_birth: data.date_of_birth,
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };
  const handleFileChange = (e) => {
    setProfileimg(e.target.files[0]);
  };
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  const handleClose = () => {
    setUpdate(false);
  };
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", profileimg);
      const res = await makeRequest.post("/api/upload", formData);
      console.log("response data :" + res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const navigation = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (info) => {
      return await makeRequest.put("/api/users", info);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      onUserDataUpdate(data);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (profileimg instanceof File) imgUrl = await upload();
    mutation.mutate({
      username: inputs.username,
      email: inputs.email,
      country: inputs.country,
      profile_img: imgUrl ? imgUrl : data.profile_img,
      date_of_birth: inputs.date_of_birth,
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: data.id,
        username: inputs.username,
        email: inputs.email,
        country: inputs.country,
        profile_img: imgUrl ? imgUrl : data.profile_img,
        date_of_birth: inputs.date_of_birth,
      })
    );
    window.location.reload();

    console.log("clicked");
    setProfileimg(null);
    setUpdate(false);
  };
  return (
    data && (
      <div className="update" data-aos="zoom-in">
        <div className="container">
          <div onClick={handleClose}>
            <button className="close">X</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <h2>Profile Image:</h2>
              <div className="img">
                <label htmlFor="img" className="edit">
                  edit
                </label>
                <input
                  type="file"
                  id="img"
                  name="file"
                  onChange={handleFileChange}
                />
                {profileimg && (
                  <img
                    src={
                      profileimg instanceof File
                        ? URL.createObjectURL(profileimg)
                        : "../../../public/upload/" + profileimg
                    }
                    alt=""
                    className="file"
                  />
                )}
              </div>
            </div>
            <div className="field">
              <h2>Username:</h2>
              <input
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
                value={inputs.username}
              />
            </div>
            <div className="field">
              <h2>Email:</h2>
              <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={inputs.email}
              />
            </div>
            <div className="field">
              <h2>Country:</h2>
              <select
                name="country"
                className="op"
                onChange={handleChange}
                defaultValue={inputs.country}
              >
                <option disabled={true} value={""}>
                  select coutry
                </option>
                {countries.map((country) => (
                  <option value={country.name} key={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <h2>Date of birth:</h2>
              <input
                type="date"
                placeholder="Date of birth"
                name="date_of_birth"
                onChange={handleChange}
                value={inputs.date_of_birth}
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    )
  );
};

export default Update;
