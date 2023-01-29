import React from "react";
import { useGlobalContext } from "../context";

export default function Favorites() {
  const {favorites , selectMeal , removeFromFavorites ,showfavorites}= useGlobalContext()
  return (
    <section className="favorites">
        <div className="favorites-content">
          <h2>My Favorites</h2>
          <div className="favorites-container">
            {favorites.map((item)=>{
              const{idMeal , strMealThumb:image}=item
               return <div key={idMeal} className="favorites-item"> 
              <img src={image} alt="" onClick={()=>selectMeal(idMeal , true)} />
              <button onClick={()=>removeFromFavorites(idMeal)}>remove</button>
              </div>
            })}
          </div>

        </div>
    </section>
  );
}
