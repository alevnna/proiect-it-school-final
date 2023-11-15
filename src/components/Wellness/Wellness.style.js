import styled from "styled-components";
import {
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from "../../constants/breakpoints";
import { Background_color } from "../../constants/colors";


export const HomeWrapper = styled.div`
background-color: ${Background_color};
border: 2px solid ;
display: block;
flex-direction: row;
color: #d0d0d0;
justify-content: center;
padding-top: 60px;
padding-left: 20px;
padding-right: 20px;
> p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color:  #121212;
    justify-content: center;
    display: flex;
  }
 
`;


export const CardBody = styled.div`

background-color: ${Background_color};
border: 2px solid ;
display: flex;
flex-direction: row;
color: #d0d0d0;
justify-content: center;
align-items: center;
padding-top: 20px;
`;
export const HomeButton = styled.button`
width: auto;
display: block;
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


div:active {
 color: #666;
 box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
}
`;
export const CardsContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
flex: content;
`;

export const Title =styled.div`
display: flex;
justify-content: center;
  margin-bottom: 1rem;
  font-size: xx-large;
  padding-top: 5px;
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

