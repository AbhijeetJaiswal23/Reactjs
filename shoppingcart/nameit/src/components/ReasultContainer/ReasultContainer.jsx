import React from 'react';
import Namepad from '../Namepad/Namepad';
import './ReasultContainer.css';

const ReasultContainer = (props) => {

    const { suggestedNames } = props



    return (

        <div className="Reasult-Container">

                {suggestedNames.map((suggestedname) => {

                    return <Namepad suggestedname={suggestedname} />
                })}


        </div>
    )
}

export default ReasultContainer;