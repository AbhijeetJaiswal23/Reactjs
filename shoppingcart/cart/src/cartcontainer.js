import React from 'react';
import CartItem from './ReactItem';
const Cart =(props)=>{

    const { products } = props;
    console.log("products after : ",products)
    
    return(

            <div className="Cart">
                {products.map((product)=>{

                    return <CartItem product={product} key={product.id} increaseqty={props.increaseqty} decqty={props.decqty} deleteqty={props.deleteqty} />
                })}
            </div>
        )
    

}

export default Cart;
