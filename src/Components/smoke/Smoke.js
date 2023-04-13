import React from 'react'
import Styles from "./smoke.module.css"

const Smoke = () => {
  return (
    <>
    <div className={Styles.main}>
    <div className={Styles.container}>
      <div>
      
      <h3>EASY RETURN</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
   
       
      </div>
      <div>
   
      <h3>GOOD PRICES </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      
      </div>
      <div>
      
      <h3>BEST WARRANTY</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
     
      </div>
    </div>
    <br/>
    <br/>
    <br/>

    <div className={Styles.smoke}>
    <div className={Styles.im}>
        <img width="100%" height="100%" src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCEkCd9Y7aNaSS4tkr3Gxwv1I8N4pI9h4qFy_0ws7w5gCKDZh6' />
        <div className={Styles.gola}>
            <img width="100%" height="100%"  src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQPNG2D2HnZ0GKRUrfwP6NzSKAj_cJQFqlb8dCvOxpbmbbZTsF' />
        </div>
    </div>
    <div className={Styles.right}>
        <h3 className={Styles.t}>About Jevape</h3>
        <h1>WE ARE THE BEST</h1>
        <h1>VAPE STORE IN TOWN</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className={Styles.best}>
        <div style={{display:"flex", gap:"30px"}}>
        <h3 className={Styles.t}> &#10004;</h3>  <h3>Best Store</h3>
     
        </div>
        <div style={{display:"flex", gap:"30px"}}>
        <h3 className={Styles.t}> &#10004;</h3>  <h3>Good Price</h3>
     
        </div>
       
        </div>
        <div className={Styles.best}>
        <div style={{display:"flex", gap:"30px"}}>
        <h3 className={Styles.t}> &#10004;</h3>  <h3>Friendly Service</h3>
     
        </div>
        <div style={{display:"flex", gap:"30px"}}>
        <h3 className={Styles.t}> &#10004;</h3>  <h3>Best Product quality</h3>
     
        </div>
       
        </div>
        <div className={Styles.best}>
        <div style={{display:"flex", gap:"30px"}}>
        <h3 className={Styles.t}> &#10004;</h3>  <h3>100% Quarantee</h3>
     
        </div>
        <div style={{display:"flex", gap:"30px"}}>
        <h3 className={Styles.t}> &#10004;</h3>  <h3>Many choice of liquid</h3>
     </div>
       </div>
       <button className={Styles.btn}>ABOUT US</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Smoke