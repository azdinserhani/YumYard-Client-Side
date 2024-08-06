import "./AddPage.scss";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import countries from "../../contry";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { makeRequest } from "../../axios.js";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";
const AddPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [instructionsInput, setInstructionsInput] = useState("");
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    defficulty_level: "",
    cooking_time_hours: "",
    cooking_time_minutes: "",
    cuisine_type: "",
  });
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/api/upload", formData);
      console.log("response data :" + res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      return await makeRequest.post("/api/posts", newPost);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    // Log the state before mutation

    // Ensure no null values are being sent
    if (inputs.title === "" || !inputs.title) {
      console.error("Title is required");
      return;
    }
    mutation.mutate({
      ...inputs,
      recipe_img: imgUrl,
      ingredients,
      instructions,
    });
    setFile(null);
    setInputs({
      title: "",
      description: "",
      defficulty_level: "",
      cooking_time_hours: "",
      cooking_time_minutes: "",
      cuisine_type: "",
    });
    setIngredients([]);
    setInstructions([]);
    console.log("cilcked");
  };

  const addIngredient = () => {
    if (ingredientInput.trim() !== "") {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput("");
    }
  };

  const addInstructions = () => {
    if (instructionsInput.trim() !== "") {
      setInstructions([...instructions, instructionsInput]);
      setInstructionsInput("");
    }
  };
  return (
    <div className="AddPage" data-aos="fade-up">
      <hr />
      <div className="head">
        <h1>Create new recipe</h1>
        <i onClick={handleClick}>
          <Button text="Save" />
        </i>
      </div>
      <hr />
      <div className="container">
        <div className="field">
          <h2>Recipe Title:</h2>
          <input
            type="text"
            placeholder="Recipe Title"
            name="title"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          />
        </div>
        <div className="field-img">
          <h2>Recipe Image:</h2>
          <div className="addImg">
            <label htmlFor="img">
              <AddPhotoAlternateIcon fontSize="large" />
            </label>
            <input
              type="file"
              id="img"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file && (
              <img src={URL.createObjectURL(file)} alt="" className="file" />
            )}
          </div>
        </div>
        <div className="field">
          <h2>Recipe Description:</h2>
          <input
            type="text"
            placeholder="Recipe Description"
            name="description"
            value={inputs.description}
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
          />
        </div>
        <div className="field">
          <h2>Ingredients:</h2>
          <div className="action">
            <input
              type="text"
              placeholder="Add Ingredients"
              onChange={(e) => setIngredientInput(e.target.value)}
              value={ingredientInput}
            />
            <a onClick={() => addIngredient()}>
              <Button text="Add" />
            </a>
          </div>

          {ingredients.map((item, index) => (
            <div key={index} className="item">
              <div className="instruction">{item}</div>
            </div>
          ))}
        </div>
        <div className="field">
          <h2>Instructions:</h2>
          <div className="action">
            <input
              type="text"
              placeholder="Add Instructions"
              onChange={(e) => setInstructionsInput(e.target.value)}
              value={instructionsInput}
            />
            <a onClick={() => addInstructions()}>
              <Button text="Add" />
            </a>
          </div>

          {instructions.map((item, index) => (
            <div key={index} className="item">
              <span>{index + 1}</span>
              <div className="instruction">{item}</div>
            </div>
          ))}
        </div>
        <div className="field">
          <h2>Cooking Time:</h2>
          <div className="time">
            <input
              type="number"
              placeholder="0 Hours"
              name="title"
              value={inputs.cooking_time_hours}
              onChange={(e) =>
                setInputs({ ...inputs, cooking_time_hours: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="0 Minute"
              name="title"
              value={inputs.cooking_time_minutes}
              onChange={(e) =>
                setInputs({ ...inputs, cooking_time_minutes: e.target.value })
              }
            />
          </div>
        </div>
        <div className="field ">
          <div className="field-option">
            <div className="country-op">
              <h2>Cuisine:</h2>
              <select
                name="country"
                className="op"
                value={inputs.cuisine_type}
                onChange={(e) =>
                  setInputs({ ...inputs, cuisine_type: e.target.value })
                }
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

            <div className="def-op">
              <h2>Defficulty:</h2>
              <select
                name="defficulty_level"
                className="op"
                value={inputs.defficulty_level}
                onChange={(e) =>
                  setInputs({ ...inputs, defficulty_level: e.target.value })
                }
              >
                <option disabled={true} value={""}>
                  select defficulty
                </option>
                <option value={"Easy"}>Easy</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Hard"}>Hard</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPage;
