import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import Styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
          <Link to='/' > <i className="fas fa-mobile-alt navbar-brand"></i></Link>
          <ul className='navbar-nav aligin-items-center '>
             <li className='nav-item ml-5'><Link to='/' className='nav-link'>Product</Link></li>
          </ul>
          <Link to='/cart' className='ml-auto'>
          <ButtonContainer><i className='fas fa-cart-plus'>My Cart</i></ButtonContainer>
          </Link>
      </nav>
    )
  }
}

export const ButtonContainer=Styled.button`
text-transform:capitalize;
font-size-1.4rem;
background:transparent;
border:solid 1px;
color:#009ffd;
&:hover{
  background:var(--lightBlue);
  color:var(--mainBlue)
}
&:focus{
  outline:none
}
`;