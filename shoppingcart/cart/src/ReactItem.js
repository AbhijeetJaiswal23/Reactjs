import React from 'react';
const CartItem=(props)=>{
   
    return(

            <div className='CartItem'>

                <div className='LeftDiv'>

                    <img style={styles.image}/>

                </div>
                <div className='RightDiv'>

                
                    <div style={styles.itemInfo}>{props.product.title}</div>
                    <div style={{color:'#777'}}>{props.product.price}</div>
                    <div style={{color:'#777'}}>qty:{props.product.qty}</div>
                    
                   
                    <div className='CartItemActions'>
                        {/* buttons */}

                        <img alt="increase" className="ActionIcons" src="https://image.flaticon.com/icons/png/512/1828/1828919.png" onClick={()=>props.increaseqty(props.product)} />
                        <img alt="decrease" className="ActionIcons" src="https://image.flaticon.com/icons/png/512/992/992683.png" onClick={()=>props.decqty(props.product)}/>
                        <img alt="delete" className="ActionIcons" src="https://image.flaticon.com/icons/png/512/3096/3096673.png" onClick={()=>props.deleteqty(props.product.id)}/>
                    </div>

                </div>
            
            </div>
        )
    }

const styles={

    image:{

        height:150,
        width:130,
        borderRadius:4,
        background:'#777'

    },

    itemInfo:{

        fontSize:25,
        color:'#777',
    
    }

}

export default CartItem;
