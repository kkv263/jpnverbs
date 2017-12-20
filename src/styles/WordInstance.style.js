import styled, {keyframes} from 'styled-components';

export const fadeIn = keyframes`
0%   { opacity: 0;}
100%  { opacity: 1;}
`

export const WIWrapper = styled.div`
width: 100%;
background-color:white;
`

export const WordTitleWrapper = styled.div`
margin-top: 2.5%;
margin-bottom: 1%;
`

export const WordHeader = styled.h1`
font-size: 3em;
color: ${props => props.Color};
`

export const WordFooter = styled.h1`
color: #909090;
font-weight: 100;
font-size: 1.5em;
`

export const AttributesWrapper = styled.div`
margin-bottom: 5%;
animation: ${fadeIn} .25s;
`

export const WordAttributes = styled.p`
font-weight: 100;
font-size: 1.5em;
color: #45B29D;
margin: 10px 0;
`

export const WordDefinition = styled.li`
font-size: 1.5em;
margin-top: 5px;
margin-left: 2.5%;
font-family: 'Hind Siliguri', sans-serif;
color : #3E4E50;
`

export const Notes = styled.ul`
color: #909090;
margin-left: 2.5%;
list-style: none;
font-family: 'Hind Siliguri', sans-serif;
`

export const WordContainer = styled.div`
margin-left: 5%;
margin-right: 2.5%;
display:grid;
width: 65%;
`

export const WordWrapper = styled.div`
`

export const WordTable = styled.div`
height: 140px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
border: 3px solid #ededed;
border-radius: 3px;
background-color:white;
margin-top:-3px;
`

export const WordCell = styled.div`
grid-column: ${props => props.gridColumn};
font-family: "Sawarabi Mincho";
font-size: 1em;
color: #778486;
padding: 10px 10px;
`

export const CellHeader = styled.p`
font-weight: 100;
font-size: 1em;
color:#3E4E50;
text-decoration: underline;
font-family: 'Hind Siliguri', sans-serif;
`

export const CellForm = styled.h1`
color:#45B29D;
font-size: 1.25em;
`

export const FormWrapper = styled.div`
display:grid;
grid-row-gap: 0px;
margin-top: 10px;
animation: ${fadeIn} .25s;

`

export const FormTitle = styled.h1`
font-size: 1.2em;
margin-bottom: 10px;
color:#3E4E50;
`

export const Tab = styled.div`
margin-bottom: 10px;
border-bottom: 2px solid #d0d0d0;
`

export const SubtitleHeader = styled.h1`
display:inline-block;
margin-right: 50px;
margin-bottom: -2px;
color: ${props => props.active ? '#3E4E50' : '#d0d0d0'}; 
font-size: 1.75em;
font-family: 'Hind Siliguri', sans-serif;
border-bottom: 2px solid ${props => props.active ? '#45B29D' : 'none'};
cursor: pointer;
transition: color ease .1s;
&:hover {
    color: #3E4E50;
  }
`

export const SearchBar = styled.input`
margin-bottom: 2.5%;
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