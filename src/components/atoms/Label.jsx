import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: 'Harmattan';
    font-size: 1.6rem;
    color: #09607D;
    margin-bottom: -6px;
`;


function Label( {msn} ) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
    );
}

export default Label;