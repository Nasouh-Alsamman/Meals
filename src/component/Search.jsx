import React from "react";
import { useGlobalContext } from "../context";

export default function Search() {
  const [text,setText] =React.useState('')
  const {setSearchTerm ,fetchRandomMeal,} = useGlobalContext()

  const handleChange = (e) => {setText(e.target.value)}
  const handleSubmit = (e) => {
    e.preventDefault()
    if(text){
      setSearchTerm(text)
      
    }
  }
const handleRandomMeal = () => {
  setSearchTerm('')
  setText('')
  fetchRandomMeal()
}

  return (
    <header className="header" >
      <h1 onClick={() => window.location.reload(false)}>Meals</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" value={text} onChange={handleChange}></input>
      <button type="submit" className="search" >Search</button>
      <button type="button" className="suprise" onClick={handleRandomMeal}>Suprise me!</button>
      </form>
    </header>
  );
}
