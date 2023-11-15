import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints"


export const Title= styled.div`
display: flex;
justify-content: center;
  margin-bottom: 1rem;
  font-size: xx-large;
  padding-top: 120px;
  line-height: 1.5;
  font-weight: lighter;
  color:  #121212; 
  cursor: pointer;
  title:active {
 color: #666;
 box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
  }

`;

export const ContainerF = styled.div`
  width: 100%;
  height: 100vh;
display: flex;
justify-content: center;
  align-items: center;
  padding: 160px 0;
  background: #eaeaea;
  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    width: 70%;
    height: 50%
  }

`;

export const ContainerAdd = styled.form`
padding-bottom: 110px;
display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 80vh;
  flex-direction: column;
  background: #e3e3e3;
  box-shadow: 16px 16px 32px #c8c8c8,
        -16px -16px 32px #fefefe;
  border-radius: 8px;

 

`;

export const ContainerButton =styled.div`

display: flex;
justify-content: center;

`;

export const AddButton = styled.button`
display: flex;
justify-content: center;
padding-top: 20px;
  color: #090909;
 padding: 0.7em 1.7em;
 font-size: 18px;
 border-radius: 0.5em;
 background: #e8e8e8;
 border: 1px solid #e8e8e8;
 transition: all .3s;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;


button:active {
 color: #666;
 box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
}


`;