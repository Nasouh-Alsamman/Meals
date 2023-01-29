import React from "react";
import { useGlobalContext } from "../context";

export default function Modal() {
  const {selectedMeal,closeModal} = useGlobalContext()
  const {strMeal:title , strMealThumb : image , strInstructions:text , strSource:source} = selectedMeal
  return (
    <aside className="modal-overlay" >

      <div className="modal-container">
        <img src={image} alt={title} />
        <div className="rightcontent">
        <h2>{title}</h2>
        <h4>Cooking Instructions :</h4>
        <p>{text}</p>
        <a href={source} target="_blank">Original Source</a>
        <button className="close" onClick={closeModal}>
										<img src="images/icon-close.png" alt="" />
									</button>
        </div>
      </div>
    </aside>
  );
}
