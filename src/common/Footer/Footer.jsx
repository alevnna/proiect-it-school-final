import React, { useState, useEffect } from "react";
import "./Footer.style"
import  LogoImg from "../../assets/images/logoevent.png";
import { FooterLogo } from "./Footer.style";






const  Footer = () => {
    
return (
<div className="main-footer">
<div className="footer-container">
    <FooterLogo>
    <p>© AIEvent. All rights reserved.</p>
  
    <img src={ LogoImg } alt=""/>
    
    </FooterLogo>
    
   
    </div>
    </div>
    
);
}

export default Footer;