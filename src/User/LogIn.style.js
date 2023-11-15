import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../constants/breakpoints";
import { BREAKPOINT_MOBILE } from "../constants/breakpoints";

export const FormSection = styled.div`
  padding: 160px 0;
  background: #eaeaea;
  color: #d0d0d0;
  font-weight: 700;
`;

export const FormTitle = styled.h3`
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

export const FormContainer = styled.div`
  display: flex;
  
`;

export const FormColumn = styled.div`
padding: 44px;
border-radius: 52px;
background: #eaeaea;
box-shadow: inset 8px 8px 8px #d5d5d5,
            inset -8px -8px 8px #ffffff;
   display:flex;         
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 70vh;
  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    width: 70%;
    height: 50%
  }
`;

export const FormWrapper = styled.form`
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;

  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color:  #121212;
  }
`;

export const FormMessage = styled.div`
  color: ${({ error }) => (error ? "red" : "green")};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

export const FormInput = styled.input`
display: flex;
  flex-direction: column;
  width: auto;
  gap: 7px;
  color: white;
  font-size: 15px;
  padding: 0px 7px;
  border-radius: 6px;
  color: #121212;
  font-size: 15px;
  background-color: transparent;
  input:focus {
  border: 2px solid transparent;
  color: #fff;
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4),
  inset 3px 3px 10px rgba(0,0,0,1),
  inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}
`;

export const FormLabel = styled.label`
  display: inline-block;
  color: #121212;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  font-weight: lighter;
`;

export const FormButton = styled.button`
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
