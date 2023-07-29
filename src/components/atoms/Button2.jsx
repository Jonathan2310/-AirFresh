import styled from "styled-components";

const StyledButton = styled.button`
    
    padding: 1.1rem 3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    border-radius: 15px;
    border: none;
    background-color: #09607D;
    border: none;
    cursor: pointer;
`;

function Button({type, value, handlerClick}) {
    return ( 
        <StyledButton type={type} onClick={handlerClick} >{value}</StyledButton>
    );
}

export default Button;
