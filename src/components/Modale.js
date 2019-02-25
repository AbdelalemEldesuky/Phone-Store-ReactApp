import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Navbar'

export default class Modale extends Component {
  render() {
    return (
       <ProductConsumer>
           {value=>{
               const {modalOpen,closeModale}=value;               
               const {img,title,price}=value.modalProduct;
               if(!modalOpen)
                   return null;
               else{
                 return(
                        <ModaleContainer>
                        <div className='container'>
                            <div className='row'>
                            <div id='Modale' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                                <h5>item added to the cart</h5>
                                <img src={img} className='img-fluid' alt='product'/>
                                <h5>{title}</h5>
                                <h5 className='text-muted'>Price : ${price}</h5>
                                <Link to='/'>
                                  <ButtonContainer id='btnCont' onClick={()=>closeModale()}>Store</ButtonContainer>
                                </Link>
                                <Link to='/cart'>
                                  <ButtonContainer onClick={()=>closeModale()}>go to cart</ButtonContainer>
                                </Link>
                             </div>
                            </div>
                        </div>
                        </ModaleContainer>
                      )
               }
           }}
       </ProductConsumer>
    )
  }
}
const ModaleContainer=styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;

#Modale{
    background:var(--mainWhite);
    padding:20px;
  
    border-radius: 20px;

}
#btnCont{
    margin-right:5px;
}
#btnCont:hover{
    background:var(--mainYellow);
}
`;