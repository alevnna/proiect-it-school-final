import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";
import { BREAKPOINT_TABLET } from "../../constants/breakpoints";



  export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendedNavbar ? "100vh" : "100px")};
  background: linear-gradient(45deg, #D0D0D0 30%,  #4E4E4E 80%);
  color: black;
  font-weight: lighter;
  position: relative;
  padding: 60px;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-width: ${BREAKPOINT_MOBILE}) {
 height: 50vh;
 width: auto;
 flex-direction: column;
  };
  
`;

  export const NavbarLeft = styled.div`
    width: 100%;
 flex: 30%;
  justify-content: flex-start;
  display: flex;
`;

  export const NavbarRight = styled.div`
    width: 70%;
  justify-content: flex-end;
  display: flex;
`;
 
export const NavbarInnerContainer = styled.div`
height: 100px;
display: flex;
`;

export const NavbarLinkContainer = styled.div`
width:auto;
display: flex;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  flex-direction: column;
opacity: 1;
padding: 0 10px;
      list-style-type: none;
      color: black;
      text-decoration: none;
  
 @media only screen and (max-width: ${BREAKPOINT_TABLET}) {
  display: none;

 }
        
        
`;


export const NavbarLinkExtended = styled(Link)`
opacity: 1;
padding: 0 10px;
      list-style-type: none;
      color: white;
      text-decoration: none;
`;

 export const Logo = styled.img`
padding: 10px;
width: 50px;
height: 40px;
font-weight: 900;
display: flex;
@media  only screen and (min-width: ${BREAKPOINT_TABLET}) {
  display: flex;
 }


`;

 export const OpenLinksButton = styled.button`
 width: 50px;
 height: 15px;
 background: none;
 border:none;
 color: white;
 font-size: 60px;
 cursor: pointer;
 padding-bottom: 50px;

 @media  only screen and (min-width:  ${BREAKPOINT_MOBILE}) {
  display: none;

  
 }

 `;

export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:space-around;
margin: 0.2rem 0.5rem;
  @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
    align-content: space-around;
    display: flex;
    flex-direction: column-reverse;
   
  }
`;


 export const DropdButton = styled.button`
 background: linear-gradient(45deg, #c4c9ff 30%,  #626fff 80%);
  color: white;
  font-weight: bold;
  @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
    display: none;
  }
  `;