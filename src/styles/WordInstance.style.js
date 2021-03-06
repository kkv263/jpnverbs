import styled, {keyframes} from 'styled-components';


export const fadeIn = keyframes`
0%   { opacity: 0;}
100%  { opacity: 1;}
`

export const BaseHeader = styled.div`
position:relative;
width:100%;
background: linear-gradient(to bottom right,rgba(98, 131, 149, 1),rgba(69, 178, 157, 1)), url('') no-repeat;
height:12.5vh;
margin-bottom:2.5%;

`

export const HomeLogo = styled.h1`
position:absolute;
color:white;
top:15%;
left:5%;
font-size: 2.5em;
font-family: 'Courgette', cursive;
text-shadow: 2px 2px #3E4E50;
cursor:pointer;
`

export const WIWrapper = styled.div`
width: 100%;
background-color:white;
position:relative;
min-height: 100vh;
`

export const WordTitleWrapper = styled.div`
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
padding-bottom: 10%;
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

export const SearchForm = styled.form`
position:absolute;
right:5%;
top: 25%;
`

export const SearchBar = styled.input `
margin-bottom: 2.5%;
min-width: 400px;
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
height:4.5vh;
margin-left: -103px;
padding-top:4px;
border: 0px;
border-radius: 8px;
background-color:#EC4664;
color: #F9f9f9;
font-size: 1.1em; 
outline: none;
cursor: pointer;
box-shadow: 0 4px 0 #C23952;
transition: all ease 0.2s;
  &:active {
    background-color: #e92a4c;
    box-shadow: 0 1px 0 #C23952;
    transform:translateY(2px);
  }
`
export const Footer = styled.div`
background: #45B29D;
position:absolute;
bottom: 0;
width: 100%;
`

export const FooterContainter = styled.div`
width: 90%;
margin: 0 auto;
`

export const FooterText = styled.div`
margin-top: 1%;
margin-bottom: 1%;
color: white;
font-family: 'Cabin', sans-serif;
font-size:.75em;
`
