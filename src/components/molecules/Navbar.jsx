import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button2 from "../atoms/Button2";
import Logo from '../../assets/img/logo.png'

function Navbar() {
    const navigate = useNavigate();

    const handlerClick = (e)=> {
        e.preventDefault();
        navigate("/");
    }

    const [clicked] = useState(false);

    return ( 
        <>
            <StyledNavbar>
                <img src={Logo} alt="Logo de la empresa"  />
                <div className={`links ${clicked ? 'active' : ''}`} >
                    <Link className='link' to="/home">Home</Link>
                    <Link className='link' to={'/noticias'} >Noticias</Link>
                    <Link className='link' to={'/masInformacion'} >Más información</Link>
                    <Button2 type="button" value="Cerrar Sesion" handlerClick={handlerClick} />
                </div>
            </StyledNavbar>
        </>
    );
}

const StyledNavbar = styled.nav`
    height: 100px;
    width: 100%;
    padding: .4rem;
    background: #E1ECEF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    img{
        height: 90%;
        cursor: pointer;
    }
    .link{
        color: black;
        text-decoration: none;
        margin-right: 6rem;
    }
    button{
        padding: 1.1rem 3rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        border-radius: 15px;
        border: none;
        background-color: #09607D;
    }

    .link{
            color: white;
            font-size: 2rem;
            display: block;
        }

        @media(min-width: 1126px) { 
            position: initial;
            margin: 0;
            .link{
                font-size: 1rem;
                color: black;
                display: inline;
            }
        }
        
    .links.active{
        @media(max-width: 1126px) {
            width: 100%;
            display: block;
            position: absolute;
            margin: auto;
            top: 30%;
            right: 0;
            text-align: center;
            z-index: 20;
            .link{
                color: #c60d0d;
                margin-bottom: 1.5rem;
                margin-right: 0;
                margin-left: 0;
            }
            button{
                width: 50%;
                background-color: white;
                color: #09607D;
            }
        }
    }

    .link.innactive{
        display: none;
    }
`;

export default Navbar;