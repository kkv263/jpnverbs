import styled from 'styled-components';

export const HomeWrapper = styled.div`
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
background: url('http://svgshare.com/i/45z.svg') no-repeat;
background-position: 3.5vh;
background-size: 20px 20px;
background-color: white;
width:600px;
height: 7vh;
outline: none;
border: 0px;
border-radius: 8px;
box-shadow: 0px 9px 14px 0px rgba(0, 0, 0, 0.1);
line-height: 22px;
color: #464F51;
font-size: 1.1em; 
padding: 5px 20px 5px 65px;
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  opacity:0.5;
}
`