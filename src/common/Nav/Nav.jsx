import { Link } from "react-router-dom";
import { HomeButton } from "../../components/homepage/Homepage.style";



export function Nav () {
    return (
        <>
  
        <Link to="/wellness">
            <HomeButton variant="link" style={{
                display: "grid",
                margin: "20px",
                color: " #121212 ",
                fontWeight: "lighter",
                textDecoration: "none",

            }}>Wellness</HomeButton>
        </Link>
        <Link to="/familyfriendly">
            <HomeButton variant="link" style={{
                margin: "20px",
                color: " #121212 ",
                fontWeight: "lighter",
                textDecoration: "none",

            }}>Family friendly</HomeButton>
        </Link>
        
      
        </>
    )
}