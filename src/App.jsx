import React, { useState } from "react";
import Main from "./component/Main";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import CardDetails1 from './component/CardDetails1';
import CardDetails2 from './component/CardDetails2';
import CardDetails3 from './component/CardDetails3';
import CardDetails4 from './component/CardDetails4';
import CardDetails5 from './component/CardDetails5';
import CardDetails6 from './component/CardDetails6';
import data from './Data'


export default function App() {
  const [arrData ,setArrData] = useState (data)

  return (
    <main>
      <BrowserRouter>
      <Header />
        <Routes>
        
          <Route path="/" element={<Main arrData={arrData} /> } />
          <Route path="/details/1" element={<CardDetails1 arrData={arrData} />} />
          <Route path="/details/2" element={<CardDetails2 arrData={arrData}/>} />
          <Route path="/details/3" element={<CardDetails3 arrData={arrData}/>} />
          <Route path="/details/4" element={<CardDetails4 arrData={arrData}/>} />
          <Route path="/details/5" element={<CardDetails5 arrData={arrData}/>} />
          <Route path="/details/6" element={<CardDetails6 arrData={arrData}/>} />
         
       </Routes>
      </BrowserRouter>
    

           
             
      
    </main>
  );
}
