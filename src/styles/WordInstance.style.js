import styled from 'styled-components';

export const WIWrapper = styled.div`
width: 100%;
`

export const WordContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 2fr 1fr;
`

export const WordWrapper = styled.div`
height: 250px;
background-color:#FED99B;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2%;
`

export const WordCell = styled.div`
grid-column: ${props => props.gridColumn};
`

export const ExtraWrapper = styled.div`
height: 500px;
background-color:blue;
`

export const SearchBar = styled.input`
margin-bottom: 2%;
width:600px;
height: 8.5vh;
outline: none;
border: 2px solid;
border-color: #b0b0b0;
border-radius: 8px;
line-height: 22px;
color: #464F51;
font-size: 1.1em; 
padding: 0px 20px 0px 20px;
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  opacity:0.5;
}
`