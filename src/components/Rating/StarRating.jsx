import "./StarRating.scss";

import StarHalfIcon from "@mui/icons-material/StarHalf";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <i>
          <StarRoundedIcon fontSize="large" />
        </i>
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <i>
          <StarHalfRoundedIcon fontSize="large" />
        </i>
      );
    } else {
      stars.push(
        <i>
          <StarBorderRoundedIcon fontSize="large" />
        </i>
      );
    }
  }
  return <div className="rating">{stars}</div>;
}

export default StarRating;
