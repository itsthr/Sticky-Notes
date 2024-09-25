import React from "react";

function Footer(){
    const curr = new Date().toLocaleDateString();
    return <footer> <p>Copyright©itsthr({curr})</p> </footer>
}
export default Footer;