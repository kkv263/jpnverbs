import styled from 'styled-components';


export const HomeWrapper = styled.div`
width: 100%;
position:relative;
height: 100vh;
`

export const ConjugateWrapper = styled.div`
position: relative;
width: 100%;
height: 70vh;
background: linear-gradient(to bottom right,rgba(98, 131, 149,.6),rgba(69, 178, 157, .6)), url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2555&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D') center center no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
`
export const Slogan = styled.h1`
color: #f9f9f9;
margin-bottom: 2%;
font-family: 'Cabin', sans-serif;
font-size: 1.75em;
`

export const Tip = styled.h1`
color: #f9f9f9;
margin-bottom: 2%;
font-family: 'Cabin', sans-serif;
font-weight: 100;
font-size: 1em;
`

export const SearchBar = styled.input`
margin-bottom: 2%;
background-color: white;
width:600px;
height: 8.5vh;
outline: none;
border: 0px;
border-radius: 8px;
box-shadow: 0px 9px 14px 0px rgba(0, 0, 0, 0.1);
line-height: 22px;
color: #464F51;
font-size: 1.1em; 
padding: 0px 20px 0px 20px;
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  opacity:0.5;
}
`

export const Button = styled.input`
width:100px;
height:8.5vh;
margin-left: 10px;
border: 0px;
border-radius: 8px;
background-color:#EC4664;
box-shadow: 0px 9px 14px 0px rgba(0, 0, 0, 0.1);
color: #F9f9f9;
font-size: 1.1em; 
outline: none;
cursor: pointer;
  &:hover {
    background-color: #e92a4c;
  }
`

export const AboutContainer = styled.div`
width: 90%;
margin:0 auto;
display:grid;
grid-template-columns: 1fr 1fr;
`

export const AboutSlogan = styled.div`
`

export const AboutInfoWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
`

export const AboutItem = styled.div`
height: 50vh;
`

export const AboutTextHeader = styled.h1`
font-size: 2em;
text-align:center;
font-family: 'Cabin', sans-serif;
`
export const AboutTextImage = styled.div`
width:60%;
margin-left: 20%;
height:55%;
background:blue;
`

export const AboutTextSubtitle = styled.div`
width: 80%;
margin: 0 auto;
font-family: 'Hind Siliguri', sans-serif;
font-size: 1.25em;
text-align:center;
`

export const Footer = styled.div`
background: #45B29D;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;

`

export const FooterText = styled.div`
color: white;
`
