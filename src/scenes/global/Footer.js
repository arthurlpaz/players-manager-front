import React from "react";

const Footer = () => (
    <footer className="Footer" style={{
        textAlign: "center",
        padding: "20px 0",
        fontSize: "16px"
    }}>
        <div className="FooterContent" style={{
            color: "gray",
            fontWeight: "bold",
        }}>
            <p>&copy; {new Date().getFullYear()} - Arthur Lincoln da Paz</p>
        </div>
    </footer>
);
 export default Footer;