import styled from 'styled-components';

export const WIWrapper = styled.div`
width: 100%;
`

export const WordContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
grid-gap: 10px;
`

export const WordWrapper = styled.div`
height: 150px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin-left: 10%;
margin-right: 10%;
border: 1px solid #ededed;
`

export const WordCell = styled.div`
grid-column: ${props => props.gridColumn};
font-family: "Sawarabi Mincho";
font-size: .9em;
color: #778486;
padding: 10px 10px;
`

export const CellHeader = styled.p`
font-weight: 100;
font-size: 1.1em;
color:black;
text-decoration: underline;
`

export const CellForm = styled.h1`
color:#45B29D;
font-size: 1.5em;
`

export const ExtraWrapper = styled.div`
background-color:blue;
grid-column: 2;
grid-row: 1 / 4;
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