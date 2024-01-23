import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.png"
import Button from '../button/Button';
import styled from 'styled-components';
const Header = () => {
  return (
    
        <HeaderStyled>
        
        <nav >
            <div className='logo'>
                <Image src={logo} alt="logo" width={36} />
                <h2>logo</h2>
            </div>
            <ul className='nav-items'>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Auctions</a>
                </li>
                <li>
                    <a href="">Market place</a>
                </li>
                <Button/>
            </ul>
        </nav>
        </HeaderStyled>
    
  )
}

const HeaderStyled = styled.header`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .logo{
        display: flex;
        align-items: center;
        h2{
            margin-left: 10px;
            font-size: 1.5rem;
            font-weight: 500;
            color: #000;
        }
    }
    .nav-items{
        display: flex;
        align-items: center;
        list-style: none;
        li{
            margin-left: 20px;
            a{
                text-decoration: none;
                color: #000;
                font-size: 1.2rem;
                font-weight: 500;
                &:hover{
                    color: #f00;
                }
            }
        }
    }

`;

export default Header