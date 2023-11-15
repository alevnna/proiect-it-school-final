import styled from "styled-components";
import { Background_color } from "../../constants/colors";



export const HomeWrapper = styled.div`
background-color: ${Background_color};


> p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color:  #121212;
    justify-content: center;
    display: flex;
  }
 
`;


export const CardBody = styled.div`
display: flex;
flex-direction: row;

background-color: ${Background_color};

`;
export const Button = styled.button`
width: 100px;
height: 100px;
display: block;
justify-content: center;
  color: #090909;
 font-size: 18px;
 border-radius: 0.5em;
 background: #e8e8e8;
 border: 1px solid #e8e8e8;
 transition: all .3s;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;

`;
export const CardsContainer = styled.div`
display: flex;

`;


export const CardText = styled.text`
color: pink;
font-size: medium;

`;


export const Title =styled.text`
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

export const CardImg= styled.image`
height: 100px;
width: auto;
`;

