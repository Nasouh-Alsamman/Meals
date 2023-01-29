import React from "react";
import { useGlobalContext } from "./context";
import Meals from "./component/Meals";
import Favorites from "./component/Favorites";
import Modal from "./component/Modal";
import Search from "./component/Search";

export default function App() {
const {showModal , favorites} = useGlobalContext()
  return (
    <main>
       <Search />
{ favorites.length > 0 && <Favorites />}     
     <Meals />
     {showModal && <Modal />} 
    </main>
  );
}
