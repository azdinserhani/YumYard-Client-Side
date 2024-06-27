import "./Posts.scss"
import Post from "../Post/Post.jsx";

const Posts = () => {
  const tData = [
    {
      id: 1,
      recipeImg:
        "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeTitle: "Shawarma with Fried Potatoes",
      avrgRating: 4.5,
      authaurImg:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719420490~exp=1719424090~hmac=1197b1c02ab2f658977727037993f03dd3dfd6ae586af5070f6d217760c779c7&w=826",
      authaurName: "mic dersone",
    },
    {
      id: 2,
      recipeImg:
        "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeTitle: "Vegetable Salad",
      avrgRating: 3,
      authaurImg:
        "https://img.freepik.com/free-photo/handsome-smiling-bearded-young-man_171337-4350.jpg?t=st=1719420490~exp=1719424090~hmac=3bb61891e0d49e4e2e6a4e34d01be3a3943737b65008fc2c4c191e7cbf342228&w=826",
      authaurName: "john doe",
    },
    {
      id: 3,
      recipeImg:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeTitle: "Falafel Platter",
      avrgRating: 4.6,
      authaurImg:
        "https://img.freepik.com/free-photo/confident-handsome-young-man-studio_273609-11838.jpg?t=st=1719420490~exp=1719424090~hmac=3cf35289c7d04d005324fbf6fd245d0cfaedff241d57d926ad1dca7cb7e7300c&w=826",
      authaurName: "mark twain",
    },
    {
      id: 4,
      recipeImg:
        "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeTitle: "Cheese Pizza",
      avrgRating: 2,
      authaurImg:
        "https://img.freepik.com/free-photo/portrait-happy-young-man-park_1303-22599.jpg?t=st=1719420490~exp=1719424090~hmac=43b7f2d7f6a43790db2ccf896041515a8fce8c57f80274dd6d64866b7ba2b5c2&w=826",
      authaurName: "albert smith",
    },
    // {
    //   id: 5,
    //   recipeImg:
    //     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   recipeTitle: "Pasta with Herbs and Tomatoes",
    //   avrgRating: 2.9,
    //   authaurImg:
    //     "https://img.freepik.com/free-photo/portrait-smiling-young-man_23-2148462582.jpg?t=st=1719420490~exp=1719424090~hmac=2d94e9c0e1440e2a5f3f8437d5066d1fe7d03a48af50431640d06af214dfb87c&w=826",
    //   authaurName: "lucas johnson",
    // },
  ];
  return (
    <div className="Posts">
      {tData.map((items) => (
        <Post post={items} key={items.id}/>
      ))}
    </div>
  );
};
export default Posts;
