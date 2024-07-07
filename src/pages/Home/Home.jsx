import "./Home.scss";
import FoodImg from "../../assets/socialfood.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    })
  },[])
  return (
    <div className="home">
      <div className="container">
        <div className="left" data-aos="fade-up">
          <h1>
            Your daily Dish A <span>Food</span> Journey
          </h1>
          <p className="desc">
            Join our community of food lovers, share your creations, and embark
            on a culinary journey that will transform your cooking experience.
            Happy cooking!
          </p>
          <Link to="/feed">
            <button>Start Coking</button>
          </Link>
        </div>
        <div className="right" data-aos="fade-down">
          <img src={FoodImg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="right" data-aos="fade-right">
          <img src={FoodImg} alt="" />
        </div>
        <div className="left" data-aos="fade-left">
          <h1>
            Share Your <span>Recipes</span>
          </h1>
          <p className="desc">
            Join our community of food lovers, share your creations, and embark
            on a culinary journey that will transform your cooking experience.
            Happy cooking!
          </p>
          <Link to="/AddPage">
            <button>Create New Recipe</button>
          </Link>
        </div>
      </div>
      <div className="contactSection">
        <div className="info">
          <div data-aos="fade-up-right">
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
