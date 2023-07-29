import Title from "../components/atoms/Title";
import '../assets/styles/InfoLogin.css'
import styled from "styled-components";

function NotFound() {
    return ( 
        <StyledDiv>
            <Title>Error: 404. Página no encontrada</Title>
        </StyledDiv>
        
     );
}

const StyledDiv=styled.div`
    height: 100vh;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default NotFound;
