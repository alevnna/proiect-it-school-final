import React, {useState} from 'react';
import { NavbarContainer,
   NavbarLeft, 
   NavbarRight,
  NavbarExtendedContainer, 
  NavbarLinkContainer, 
NavbarLink,
NavbarInnerContainer,
Logo,
OpenLinksButton,
NavbarLinkExtended} from "./Navbar.style";

import SearchBar from "./Searchbar"
import  LogoImg from '../../assets/images/logoevent.png';

 

function Navbar () {
 
const [extendedNavbar, setExtendedNavbar] = useState(false);
  return (
    
  <NavbarContainer  extendedNavbar={extendedNavbar}>
    <NavbarInnerContainer>
<NavbarLeft>
<NavbarLinkContainer>
  <Logo src={ LogoImg  }></Logo>
  <NavbarLink to="/"> <h3>AIEvent </h3> </NavbarLink>
  <NavbarLink to="/music"> Music </NavbarLink>
  <NavbarLink to="/sports"> Sports </NavbarLink>
  <NavbarLink to="/comedy"> Comedy </NavbarLink>
  <NavbarLink to="/movies"> Movies </NavbarLink>
  <NavbarLink to ="/events"> Events</NavbarLink>
 
  
  <OpenLinksButton onClick={() => {
    setExtendedNavbar(( curentNav ) => !curentNav );
  }}
    >
       {extendedNavbar ? <> &#10005;</> : <>&#8801; </> }
        </OpenLinksButton>
</NavbarLinkContainer>
</NavbarLeft>
<NavbarRight>
<SearchBar />


<NavbarLink to="/user/register"> Sign up </NavbarLink>
  <NavbarLink to="/user/login"> Login </NavbarLink>
  <NavbarLink to ="/addevents"> Create event</NavbarLink>
</NavbarRight>
</NavbarInnerContainer>
{extendedNavbar && (
  <NavbarExtendedContainer>
      <NavbarLinkExtended to="/"> <h1>AIEvent </h1> </NavbarLinkExtended>
<NavbarLinkExtended to="/music"> Music </NavbarLinkExtended>
  <NavbarLinkExtended to="/sports"> Sports </NavbarLinkExtended>
  <NavbarLinkExtended to="/comedy"> Comedy </NavbarLinkExtended>
  <NavbarLinkExtended to="/movies"> Movies </NavbarLinkExtended>
  <NavbarLinkExtended to="/events/wellness"> Wellness </NavbarLinkExtended>
  <NavbarLinkExtended to="/events/familyfriendly"> Family friendly </NavbarLinkExtended>
  
</NavbarExtendedContainer>
)}

  </NavbarContainer>

  
  );
}


export default Navbar;


