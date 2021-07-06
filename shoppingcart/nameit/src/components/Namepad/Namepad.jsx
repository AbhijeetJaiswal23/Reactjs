import React from 'react';
import './Namepad.css';

const Namepad = (props) => {

    const { suggestedname } = props;
    const namecheapurl='https://www.namecheap.com/domains/registration/results/?domain=';

    return (

        <a href={`${namecheapurl}${suggestedname}`}>

            <div className="NamepadContainer">

                <p className="Namepad-txt">{suggestedname}</p>

            </div>

        </a>

    )
}

export default Namepad;