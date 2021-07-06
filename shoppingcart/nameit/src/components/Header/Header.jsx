import React from 'react';
import './Header.css';

const Header=(props)=>{

    const {headerExpanded}=props
    console.log(headerExpanded);
    return(

        <div className="head-container">

            <img 
            
            src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
            className={`imgheader ${
                        headerExpanded 
                        ? `head-image-expanded`
                        :`head-image-contracted`
                        }`
                    } 
            alt="header-image"
            />

            <h1 className={`head-txt ${
                        headerExpanded 
                        ? `head-text-expanded`
                        :`head-text-contracted`
                        }`}>Name it! </h1>
        </div>

    )
}

export default Header;