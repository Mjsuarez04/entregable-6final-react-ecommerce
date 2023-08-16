import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
        <>
          <span><Link to="/user/login">Login</Link></span>
          <span><Link to="/">Purchases</Link></span>
          <span><Link to="/">Cart</Link></span>
        </>
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
  background-color: #F85555;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: aliceblue;
    text-decoration: none;
    margin-right: 1.2rem;
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
      font-size: 1.2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.2rem;
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
    margin-right: 150px;
    a{
      font-size: 1.2rem;
      margin-top: 1rem;
      color: aliceblue;
    }
  }

    @media(min-width: 768px){
      .burger{
        display: none;
      }
    }
`

const BgDiv = styled.div`
  background-color: #f85555;
  position: absolute;
  top: -1000px;
  left: -100%;
  width: -100%;
  height: 90%;
  z-index: -1;
  transition: all .5s ease;
  &.active{
    border-radius: 0 0 50% 0;
    top: 0;
    left: 0;
    width: 50%;
    height: 60%;
  }
`
