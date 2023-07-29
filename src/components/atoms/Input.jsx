import styled from 'styled-components';

const StyledInput = styled.input`
    /* height: 40px; */
    padding: 15px 10px;
    font-size: 1rem;
    background: #E1ECEF;
    color: #000000;
    border-radius: 8px;
    border: none;
`;

function Input({type, placeholder, name}) {
    return ( 
        <StyledInput type={type} placeholder={placeholder} name={name} />
    );
}

export default Input;
