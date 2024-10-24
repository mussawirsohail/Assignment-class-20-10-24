export default function Footer(){
    return(
        <>
        <div className="parent-footer">
            <div className="image">
                <img src="footer-pic.png"className="footer-pic"/>
            </div>
            <div className="info">
                <h3>Informaton</h3>
                <ul>
                    <li>Main</li>
                    <li>Gallery</li>
                    <li>Projects</li>
                    <li>Certification</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="Contact">
                <h3>Contacts</h3>
                <div className="footer-text">
                    <img src="location.png" className="footer-icon"/>
                    <p> 1234 Sample Street Asutin Texas 78704</p>
                </div>
                <div className="footer-text">
                    <img src="phone.png"className="footer-icon"/>
                    <p> 512.333.2222</p>
                </div>
                <div className="footer-text">
                    <img src="gmail.png"className="footer-icon"/> 
                    <p>sampleemail@gmail.com</p>
                </div>
            </div>
            <div className="socail-media">
                <h3>Social Media</h3>
                <div className="icon">
                    <img src="facebook.png" className="social-icon"/>
                    <img src="twitter.png" className="social-icon"/>
                    <img src="linkedin.png"className="social-icon"/>
                    <img src="pininterest.png"className="social-icon"/>
                </div>
            </div>
        </div>
        </>
    )
}