import React from 'react';
import Header from '../Header/Header';
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import ReasultContainer from '../ReasultContainer/ReasultContainer';

const name=require('@rstacruz/startup-name-generator');

class App extends React.Component{

    constructor(){

        super();

        this.state={

            headerExpanded:true,
            suggestedNames:[]
        };

    }

   


    handleinputChange=(inputText)=>{

        // console.log(inputText);

        this.setState({
            
            headerExpanded:!(inputText),
            suggestedNames:name(inputText) //name it self gives an array so no need to push it like that
    
        })


    }

    render(){
        
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded}/>
                <Searchbar  oninputChange={this.handleinputChange} />
                <ReasultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}
// function App (){

//     return <h1>Hi welcome to app</h1>
// }

export default App;
