import styled from 'styled-components';

export const WIWrapper = styled.div`
width: 100%;
background-color:#f9f9f9;
`

export const WordTitleWrapper = styled.div`
margin-left: 2.5%;
margin-top: 2.5%;
`

export const WordHeader = styled.h1`
font-size: 2em;
color: ${props => props.Color};
`

export const WordAttributes = styled.p`
font-weight: 100;
color: #909090;
margin-top: 5px;
`

export const WordContainer = styled.div`
display: grid;
grid-template-columns: 1.5fr 1fr;
grid-column-gap: 20px;
border-radius: 8px;
margin-left: 2.5%;
margin-right: 2.5%;
`

export const WordWrapper = styled.div`
border: 1px solid #b0b0b0;
border-radius: 8px;
background-color:white;
display:grid;
grid-template-rows: 1.75fr 1fr 1fr 1fr;
grid-row-gap: 20px;
`

export const WordTable = styled.div`
height: 140px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin-left: 2.5%;
margin-right: 2.5%;
border: 1px solid #ededed;
border-radius: 3px;
background-color:white;
`

export const WordCell = styled.div`
grid-column: ${props => props.gridColumn};
font-family: "Sawarabi Mincho";
font-size: .8em;
color: #778486;
padding: 10px 10px;
`

export const CellHeader = styled.p`
font-weight: 100;
font-size: 1em;
color:black;
text-decoration: underline;
`

export const CellForm = styled.h1`
color:#45B29D;
font-size: 1.1em;
`

export const ExtraWrapper = styled.div`
border: 1px solid #b0b0b0;
border-radius: 8px;
background-color:white;
grid-column: 2;
grid-row: 1 / 4;
`

export const SearchBar = styled.input`
margin-bottom: 2.5%;
margin-left: 2.5%;
width: 600px;
height: 6vh;
outline: none;
border: 1px solid;
border-color: #b0b0b0;
border-radius: 8px;
line-height: 22px;
color: #464F51;
font-size: 1.1em; 
padding: 0px 20px 0px 20px;
background-color:white;
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  opacity:0.5;
}
`

export const Button = styled.input`
width:100px;
height:5.5vh;
margin-left: -103px;
border: 0px;
border-radius: 8px;
background-color:#EC4664;
color: #F9f9f9;
font-size: 1.1em; 
outline: none;
cursor: pointer;
  &:hover {
    background-color: #e92a4c;
  }
`