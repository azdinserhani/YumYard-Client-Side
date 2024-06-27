import "./Home.scss";
import FoodImg from "../../assets/socialfood.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <h1>
            Your daily Dish A <span>Food</span> Journey
          </h1>
          <p className="desc">
            Join our community of food lovers, share your creations, and embark
            on a culinary journey that will transform your cooking experience.
            Happy cooking!
          </p>
          <button>Sign Up</button>
          <p>
            Do you have account? <span>Login</span>
          </p>
        </div>
        <div className="right">
          <img src={FoodImg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="right">
          <img src={FoodImg} alt="" />
        </div>
        <div className="left">
          <h1>
            Share Your <span>Recipes</span>
          </h1>
          <p className="desc">
            Join our community of food lovers, share your creations, and embark
            on a culinary journey that will transform your cooking experience.
            Happy cooking!
          </p>
          <button>Create New Recipe</button>
        </div>
      </div>
      <div className="contactSection">
        <div className="contact">
          <div className="info">
            <h2>Let’s stay In Touch</h2>
            <p>
              Don’t miss out on our delicious updates and culinary inspiration!
              Subscribe now and start your journey to becoming a kitchen pro.
            </p>
            <div className="input">
              <form>
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
