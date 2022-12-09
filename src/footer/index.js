const Footer = (props) => {
    let date = new Date();

    return (
        <div className="footer">
            <div className="footer-text">David Ng'ang'a Njeri</div>
            <div className="footer_inner">&copy {date.getFullYear()}</div>
        </div>
    )
}


// #1b1b31 , 
// the yellow, #FAB627, 
// the light blue #00F7FF,

// than the water used in the map is 
// (rgb 0,58,58) 

export default Footer;