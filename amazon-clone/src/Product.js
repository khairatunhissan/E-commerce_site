import React from 'react'
import './Product.css'
import StarsIcon from '@material-ui/icons/Stars';

function Product({id,title,price,rating,image}) {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <StarsIcon/>
                        ))
                    }
                </div>
                </div>
                <img src={image} alt=""/>
                <button>Add to basket</button>
            </div>
            
       
    )
}

export default Product
