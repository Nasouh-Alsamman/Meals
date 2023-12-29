import React  from "react";
import { Link } from "react-router-dom";






export default function Main({arrData}) {


 
  
  const newData = arrData.map((item,index) => {
    return(
      <>
            <article className="single-product" key={index}  >
                <div className="section-left">
                  <div className="img-holder">
                     <img src={item.img} alt="sss" ></img>
                  </div>
                  <p>Roll over image to zoom in</p>
                  <div className="smlimg">
                    <div className="imghold"><img src={item.img} alt="" /></div>
                    <div className="imghold"><img src={item.img} alt="" /></div>
                    <div className="imghold"><img src={item.img} alt="" /></div>
                    <div className="imghold"><img src={item.img} alt="" /></div>    
                    </div>
               </div>
               <div className="section-right">
                <div className="first">
                  <h2>10% Newyear Offer</h2>
                  <h1>LUMINOS</h1>
                </div>
                <div className="second">
                  <h1>{item.productName}</h1>
                  <button className="heart"><img src='./images/Vector.png' alt='' ></img></button>
                </div>
                <div className="third">
                  <h1>Selling out fast</h1>
                  <h2>Best in UAE</h2>
                </div>
                <div className="forth">
                  <div>
                  <h1>Capacity</h1>
                  <h4>35 AH</h4>
                  </div>
                  <div>
                  <h1>Warranty</h1>
                  <h4>3 yrs</h4>
                  </div>
                  <div>
                  <h1>Price</h1>
                  <h4>Wholesale only</h4>
                  </div>    
                </div>
                <div className="fifth">
                  <div>
                    <h4>Price Inclusive of VAT</h4>
                    <h1>{item.price}</h1>
                  </div>
                  <div>
                  <button className="basket"><img src='./images/Vector1.png' alt='' ></img></button>
                  </div>
                </div>
                <div className="sixth">
                  <div>
                    <h4>Also available on</h4>
                  </div>
                  <div className="btnholder">
                    <button className="btn"><img src='./images/noon.png' alt='' ></img></button>
                    <button className="btn"><img src='./images/amazon.png' alt='' ></img></button>
                    <button className="btn"><img src='./images/Rectangle .png' alt='' ></img></button>
                    <button className="btn"><img src='./images/whatsapp.png' alt='' ></img></button>
                  </div>
                </div>
                <div className="seventh">
                <Link  to={{ pathname: '/details/'+ item.id}} ><button className="buy" >Buy now</button></Link>
                </div> 
               </div>
             </article>  
         
     
        
    </>
    ) 
} )
return <section className="main" >{newData}</section>;
  
  
  
}
