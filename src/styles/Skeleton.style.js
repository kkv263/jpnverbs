import styled, {keyframes} from 'styled-components';

export const shine = keyframes`
from {
    -webkit-mask-position: 150%;
  }
  
  to {
    -webkit-mask-position: -50%;
  }
`

export const SKText = styled.div`
width: ${props => props.w};
height: ${props => props.h};
margin-top: ${props => props.mt};
animation: ${shine} linear 1s infinite;
background: lightgrey;
-webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
-webkit-mask-size: 200%;
`