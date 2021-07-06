import React from "react";
import Cart from "./cartcontainer";
import Navbar from "./nav";
import firebase from 'firebase';

class App extends React.Component 
{

  constructor()
  {
    super();

    this.state={

        products:[]
    
      }

      
      
    }


    componentDidMount (){

      firebase
        .firestore()
        .collection('products')
        .get()
        .then((snapshot)=>{

          console.log(snapshot);
        })

    }

    handleincqty =(product)=>{

      console.log("hey qty ",product);
      const {products}=this.state;
      const index=products.indexOf(product);

      products[index].qty+=1;

      this.setState({

          products
      })

  }

  handledecqty=(product)=>{

      console.log(product);

      const {products}=this.state;
      const index=products.indexOf(product);

      if(products[index].qty ===0){
          return;
      }
      else
      {
          products[index].qty-=1;
      }

      this.setState({
          products
      })
  }

  handledeleteqty=(id)=>{

      const {products}=this.state;
      
      const items=products.filter((item)=>item.id!==id)
      this.setState({

          products:items

      })
  }

    getCount = () =>{

      const{products}=this.state;
      let count=0;
      products.forEach((product)=> {

        count+=product.qty

        

      })

      return count;


   }

   getprice=(()=>{

    const {products}=this.state;

    let total=0;

    products.forEach((product)=>{

      total+=product.price*product.qty;

      
    })

    return total;

   });

  render()
  {
    const {products}=this.state

    return (

      
      <div className="App">
        <Navbar count={this.getCount()} />
        < Cart 

          products={products}
          deleteqty={this.handledeleteqty}
          increaseqty={this.handleincqty}
          decqty={this.handledecqty}
        />

        <div style={{fontSize:20,color:'black',padding:10}}>
          Total price:{this.getprice()}
        </div>
      </div>
    );

  }
  
}

export default App;
