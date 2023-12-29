import React from 'react'


function CardDetails2(props) {
console.log(props.arrData[1]);
  return (
    <section className="main">
    <article className="single-product"  >
                <div className="section-left">
                  <div className="img-holder">
                     <img src={props.arrData[1].img} alt="sss" ></img>
                  </div>
                  <p>Roll over image to zoom in</p>
                  <div className="smlimg">
                    <div className="imghold"><img src={props.arrData[1].img} alt="" /></div>
                    <div className="imghold"><img src={props.arrData[1].img} alt="" /></div>
                    <div className="imghold"><img src={props.arrData[1].img} alt="" /></div>
                    <div className="imghold"><img src={props.arrData[1].img} alt="" /></div>    
                    </div>
               </div>
               <div className="section-right">
                <div className="first">
                  <h2>10% Newyear Offer</h2>
                  <h1>LUMINOS</h1>
                </div>
                <div className="second">
                  <h1>{props.arrData[1].productName}</h1>
                  <button className="heart"><img src='../images/Vector.png' alt='' ></img></button>
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
                    <h1>{props.arrData[1].price}</h1>
                  </div>
                  <div>
                  <button className="basket"><img src='../images/Vector1.png' alt='' ></img></button>
                  </div>
                </div>
                <div className="sixth">
                  <div>
                    <h4>Also available on</h4>
                  </div>
                  <div className="btnholder">
                    <button className="btn"><img src='../images/noon.png' alt='' ></img></button>
                    <button className="btn"><img src='../images/amazon.png' alt='' ></img></button>
                    <button className="btn"><img src='../images/Rectangle .png' alt='' ></img></button>
                    <button className="btn"><img src='../images/whatsapp.png' alt='' ></img></button>
                  </div>
                </div>
                <div className="seventh">
    
                <button className="buy" >Buy now</button>
                </div> 
               </div>
             </article> 
             </section> 
  )
}

export default CardDetails2
