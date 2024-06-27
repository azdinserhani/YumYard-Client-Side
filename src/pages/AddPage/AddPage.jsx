import "./AddPage.scss";
import Button from "../../components/button/Button";
import { useState } from "react";
import countries from "../../contry";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const AddPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [instructionsInput, setInstructionsInput] = useState("");

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
    <div className="AddPage">
      <hr />
      <div className="head">
        <h1>Create new recipe</h1>
        <Button text="Save" />
      </div>
      <hr />
      <div className="container">
        <div className="field">
          <h2>Recipe Title:</h2>
          <input type="text" placeholder="Recipe Title" />
        </div>
        <div className="field-img">
          <h2>Recipe Image:</h2>
          <div className="addImg">
            <label htmlFor="img">
              <AddPhotoAlternateIcon fontSize="large" />
            </label>
            <input type="file" id="img" />
          </div>
        </div>
        <div className="field">
          <h2>Recipe Description:</h2>
          <input type="text" placeholder="Recipe Description" />
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
            <input type="text" placeholder="0 Hours" />
            <input type="text" placeholder="0 Min" />
          </div>
        </div>
        <div className="field">
          <h2>Cuisine:</h2>
          <select name="contry" className="country">
            <option disabled={true} selected={true}>
              select coutry
            </option>
            {countries.map((country) => (
              <option value={country.name} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default AddPage;
