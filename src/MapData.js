import React, { useState } from "react";
import "./Stayle.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment, BiShare, BiUserCircle } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";

const MapData = ({ id, img }) => {
  const [like, setLike] = useState(false);

  function handlelike(e) {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  }
  return (
    <div className="cardalign" key={id}>
      <div className="card">
        <div className="card-header">
          <FaRegCircleUser className="user" size={30} />
          <p className="username">username</p>
        </div>
        <img class="card-img-top" src={img} alt="Card image cap" />
        <div className="card-footer">
          {like ? (
            <AiFillHeart
              size={30}
              className="text-danger cursor"
              onClick={(e) => handlelike(e.target.value)}
            />
          ) : (
            <AiOutlineHeart
              color="red"
              size={30}
              onClick={() => handlelike()}
              className="cursor"
            />
          )}
          &nbsp;
          <BiComment size={30} className="cursor" />
          &nbsp;
          <BiShare size={30} className="cursor" />
          <div className="textboxpadding">
            <input
              type="text"
              placeholder="Add comment here..."
              className="textbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapData;
