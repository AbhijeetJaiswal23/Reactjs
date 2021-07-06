import React from 'react';
const Navbar=(props)=>{
        return(

            <div style={styles.Navbar}>

                <div style={styles.carticoncontainer}>
                    <img style={styles.carticon} src="https://image.flaticon.com/icons/png/512/709/709640.png" />
                    <span style={styles.cartitemcount}>{props.count}</span>
                </div>

               
            
            </div>
        )
    
}

const styles={


    carticon:{
        height:32,
        marginRight:20
    },
    Navbar:{
         height:70,
         background:'#4267b2',
         display:'flex',
         justifyContent:'flex-end',
         alignItems:'center'


     },

     carticoncontainer:{
         position:'relative'
     },

     cartitemcount:{

        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9

     }

}

export default Navbar;