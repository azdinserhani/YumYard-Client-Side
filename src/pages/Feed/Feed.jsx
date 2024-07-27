import { useEffect } from "react";
import Posts from "../../components/Posts/Posts";
import "./Feed.scss"
import Aos from "aos";
import "aos/dist/aos.css";

const Feed = () => {
    useEffect(() => {
      Aos.init({
        duration: 1500,
        once: true,
      });
    }, []);
  return (
    <div className="Feed" data-aos="fade-up">
      <h2>Explore Recipes</h2>
      <Posts />
    </div>
  );
}
export default Feed;
