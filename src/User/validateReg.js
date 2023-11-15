
export default function validateReg({ name, email, password, confirmPass }) {
    if (!name) {
      return "Name required";
    }
  
    
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;  
    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email.toLocaleLowerCase())) {
      return "Email address is invalid";
    }
  
    if (!password) {
      return "Password is required";
    } else if (password.length > 8) {
      return "Password need to be 8 characters or more";
    }
  
    if (!confirmPass) {
      return "Enter the same password";
    } else if (password !== confirmPass) {
      return "Password doesnt match";
    }
  
    return null;
  }
  