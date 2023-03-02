import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './styles/header.css'
import BurguerButton from './BurguerButton'

export const Header = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //manejamos en cambio del estado de true a false
    setClicked(!clicked)
  }

  return (
  <>
    <NavContainer>
      <h2>
        <Link to="/">
          MS Shop
        </Link>
      </h2>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a onClick={handleClick}><Link to="/user/login">Login</Link></a>
        <a onClick={handleClick}><Link to="/">Purchases</Link></a>
        <a onClick={handleClick}><Link to="/">Cart</Link></a>
      </div>
      <div className='burger'>
        <BurguerButton clicked={clicked} handleClick={handleClick}/>
      </div>
      <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
    </NavContainer>
  </>
  );
}

const NavContainer = styled.nav`
  h2{
    font-weight: 400 bold;
  }
  padding: 1rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: aliceblue;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: aliceblue;
      font-size: 1rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: aliceblue;
        display: inline;
      }
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 15%;
    left: -100px;
    margin-right: 70px;
    text-align: center;
    a{
      font-size: 1rem;
      margin-top: 1rem;
      color: aliceblue;
    }
  }

  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease;
  &.active{
    border-radius: 0 0 65% 0;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
  }
`
