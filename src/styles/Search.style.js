import styled from 'styled-components'

export const SearchContainer = styled.div`
width: 100%;
`

export const SearchTitleWrapper = styled.div`
width: 100%;
height: 35vh;
background: linear-gradient(to bottom right,rgba(98, 131, 149,.6),rgba(69, 178, 157, .6)), url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2555&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D') no-repeat;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const SearchBar = styled.input`
width: 600px;
height: 9vh;
outline: none;
border: 1px solid;
border-color: #b0b0b0;
border-radius: 8px;
line-height: 22px;
color: #464F51;
font-size: 1.25em; 
padding: 0px 20px 0px 20px;
background-color:white;
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  opacity:0.5;
}
`

export const Button = styled.input`
width:100px;
height:7.5vh;
margin-left: -107px;
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

export const BottomContainer = styled.div`
margin-top: 5%;
margin-bottom: 5%;
`

export const ResultsGridWrapper = styled.div`
width: 60%;
margin-left:5%;
display: grid;
grid-template-rows: .1fr 1fr;
grid-row-gap: 50px;
`

export const ResultsItem = styled.div`
width: 100%;
display:grid;
grid-template-rows: 1fr;
`

export const ResultsLeft = styled.div`
font-size: 2em;
color: #3E4E50;
`

export const LinkText = styled.span`
font-size: .5em;
color: #EC4664;
text-decoration: underline;
text-decoration-color: #EC4664;
transition: color ease .1s;
  &:hover {
    color: #3E4E50;
    text-decoration-color: #3E4350;
  }
`

export const WordAttributes = styled.p`
font-weight: 100;
font-size: 1em;
color: #45B29D;
margin: 10px 0;
`

export const WordDefinition = styled.li`
font-size: 1.25em;
margin-top: 5px;
margin-left: 2.5%;
font-family: 'Hind Siliguri', sans-serif;
color : #3E4E50;
`

export const ResultsText = styled.h1`
font-family: 'Hind Siliguri', sans-serif;
color : #3E4E50;
font-size: 1.5em;
text-align: ${props => props.center ? 'center' : ''}; 
font-size: ${props => props.weight ? '1em' : ''}; 
`

export const ResultsRight = styled.div`
`

export const PaginationContainer = styled.div`
width:50%;
margin-left: 10%;
margin-top: 2.5%;
`

export const PaginationButton = styled.div`
display: inline-block; 
visibility:  ${props => props.noDisplay ? 'hidden' : ''}; 
vertical-align:top;
width: 50px;
color: ${props => props.active ? '#3E4E50' : '#d0d0d0'}; 
border-bottom: ${props => props.active ? '#45B29D' : 'none'} 3px solid;
text-align: center;
font-size: 1.5em;
cursor:pointer;
transition: color ease .1s;
&:hover {
    color: #3E4E50;
  }
`


