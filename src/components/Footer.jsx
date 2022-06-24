import React from "react";

const Footer = () => {

    let newDate = new Date()
    let year = newDate.getFullYear();
    
    return(
        <>
<div class="copyright text-center">
        <p>Ⓒ <span id="year">{year}</span> All Rights Reserved | Developed by <span class="my-Name"><a target="_blank" rel="noreferrer" href="mailto:bhallibhai69@gmail.com"> Bhalli</a></span> </p>
    </div>        </>
    );
}
export default Footer;