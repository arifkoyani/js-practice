import React from "react";
let Navbar=(props)=>{
    return(
        <>
        <nav> 
            <ul className="justify-center items-center">
                <li onClick={()=>{props.salary()}}>Home</li>
                <li>Contact</li>
                <li>FAQS</li>
                <li>Cateloges</li>
                <li>Gallery</li>
            </ul>
            <input className="outline border-[1px] outline-none rounded-[2px] "/>
        </nav>
        
        </>
    )
}

export default Navbar;