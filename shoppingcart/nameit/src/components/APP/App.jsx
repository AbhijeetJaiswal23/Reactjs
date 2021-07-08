import React from 'react';
import Header from '../Header/Header';
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import ReasultContainer from '../ReasultContainer/ReasultContainer';
import { useState } from 'react';

const name=require('@rstacruz/startup-name-generator');


const App =()=>{

    const [headerExpanded,setheaderExpanded]=useState(true);
    const [suggestedNames,setsuggestedNames]=useState([]);


    
    const handleinputChange=(inputText)=>{

        // console.log(inputText);

         setheaderExpanded(!inputText);
         setsuggestedNames(inputText ? name(inputText) : []);


    }


    return (
        <div>
            <Header headerExpanded={headerExpanded}/>
            <Searchbar  oninputChange={handleinputChange} />
            <ReasultContainer suggestedNames={suggestedNames} />
        </div>
    )



}

 

   



     
 
// function App (){

//     return <h1>Hi welcome to app</h1>
// }

export default App;
