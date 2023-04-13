import React from "react";
import './Products.css';
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'


import pic1 from './img/pic1.webp';
import pic2 from './img/pic2.jpg';
import pic3 from './img/pic3.webp';
import pic4 from './img/pic4.webp';
import pic5 from './img/pic5.jpg';
import pic6 from './img/pic6.webp';
import pic7 from './img/pic7.webp';
import pic8 from './img/pic8.webp';
import pic9 from './img/pic9.webp';
import pic10 from './img/pic10.jpg';
import pic11 from './img/pic11.jpg';
import pic12 from './img/pic12.jpg';

const Products=()=>{

    const ItemsList =[
        {
            id:'1',
            itemName:'Guff Puff Vape with One Pod',
            price:'₹1,999',
            image:pic1
            
        },

        {
            id:'2',
            itemName:'Uwell Caliburn A2S Replacement Pods',
            price:'₹1,499',
            image:pic12

        },

        {
            id:'3',
            itemName:'Uwell Caliburn A2S Pod System',
            price:'₹2,499',
            image:pic3
        },
        
        {
            id:'4',
            itemName:'Uwell Caliburn G Replacement Coils',
            price:'₹2,999',
            image:pic4
        },
        
        {
            id:'5',
            itemName:'Uwell Caliburn AK2 Replacement Pods',
            price:'₹1,000',
            image:pic5
        },
        
        {
            id:'6',
            itemName:'Guff Puff Pod Lychee Bomb',
            price:'₹1,299',
            image:pic6
        },
        
        {
            id:'7',
            itemName:'Uwell Caliburn A2 15W Pod System',
            price:'₹1,499',
            image:pic7
        },
        
        {
            id:'8',
            itemName:'Smok Puff Pod Grape Ice',
            price:'₹999',
            image:pic8
        },
        
        {
            id:'9',
            itemName:'Smok Puff Pod Blue Razz',
            price:'₹1,199',
            image:pic9
        },
        
        {
            id:'10',
            itemName:'Smok Puff Pod Strawberry Watermelon',
            price:'₹1,799',
            image:pic10
        },
        {
            id:'11',
            itemName:'Smok Puff Pod Strawberry Watermelon',
            price:'₹1,799',
            image:pic11
        },
        {
            id:'12',
            itemName:'Smok Puff Pod Strawberry Watermelon',
            price:'₹1,799',
            image:pic10
        },
    ];


    const ProItems =({itemName,price,image})=>{
        return(
        
            <div className="itemCart">
                <img src={image} className="mypics" />
                <div className="textDetails">
                <p id="itemname">{itemName}</p>
                <p>Rating:<BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStar className="star"/></p>
                <p id="price">{price}</p>
                <button id="buynow">BUY NOW</button>
                </div>
            </div>
        
        )
    }
    

// -----------------


    return(
        <>
        <p id="heading">Products</p>
        <div className="cardContainer">
        {ItemsList.map((cardx) =>(
           <ProItems key={cardx.itemName} {...cardx} />
        ))
        };


        </div>
       


        </>
    )
        
    
}
export default Products;


