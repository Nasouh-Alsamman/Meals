import React from "react";
import { useGlobalContext } from "../context";
import {AiFillHeart} from "react-icons/ai"

export default function Meals() {
  const {meals,loading ,selectMeal ,addToFavorites, removeFromFavorites} = useGlobalContext()
  
  if(loading === true){
    return <section className="loading"><h1>No Meals Matched, Pleas Try Again...</h1></section>
  }
  if(meals.length < 1){
    return <section className="loading"><h1>Loading...</h1></section>
  }
  else{
  return <section className="section-center">
    {meals.map((singleMeal) => {
      const {idMeal , strMeal:title , strMealThumb:image} = singleMeal
      return <article className="single-meal" key={idMeal}>
        <img src={image} alt="" />
        <footer>
          <button className="heart" onClick={()=> addToFavorites(idMeal)}><AiFillHeart /></button>
          <h5>{title}</h5>
          <button className="detail" onClick={() => selectMeal(idMeal)}>Details</button>
        </footer>
      </article>
    } )}
   </section>
  }
}
