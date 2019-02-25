import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import  ProductList from './components/ProductList';
import  Details from './components/Detalils';
import  Cart from './components/cart';
import  Default from './components/Default';
import Modale from './components/Modale'

class App extends Component {
  render() {
    return (
         <React.Fragment>
           <Navbar></Navbar>
           <Switch>
           <Route exact path='/cart' component={Cart}/>
             <Route exact path='/Details' component={Details}/>
             <Route exact path='/' component={ProductList}/>
             <Route component={Default}/>
           </Switch>
           <Modale/>
        </React.Fragment>
    );
  }
}

export default App;
