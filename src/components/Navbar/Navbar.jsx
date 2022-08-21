import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {
    const nav = [
        {title: "All", to: "/"},
        {title: "HTML", to: "/html"},
        {title : "CSS", to : "/css"} ,
        {title : "Javascript" , to : "/javascript"} ,  

    ];
    
    return (
        
         <div className="navbar">
         
            {nav.map((e,i) =>(
            <button className="Butnav">
                <Link key={i} to={e.to} style={{margin:"45px"}}>
                {e.title}
            </Link>
            </button>
            ))}
            
        </div>
 
       
    );
};