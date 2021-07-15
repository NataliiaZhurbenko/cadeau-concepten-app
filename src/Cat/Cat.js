import { useState } from "react";
import "./Cat.css";

function Cat(props) {
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const showPopover = () => {
    setIsOpenPopover(true);
  };

  const hidePopover = () => {
    setIsOpenPopover(false);
  };

  let className = "Cat";
  if (isOpenPopover) {
    className += " CatDetailsOpen";
  }

  return (
    <div className={className}>
      <img className="CatImage" src={props.image} alt="catImage" />
      <p className="CatName">{props.name}</p>
      <p className="CatDetails" onClick={showPopover}>
        More info...
      </p>
      <div className="CatDescription">
        <div className="CatDescriptionContent">
          <p>{props.description}</p>
          <p className="CatDetailsHide" onClick={hidePopover}>
            Hide
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cat;
