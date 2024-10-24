import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
export default function Contactinformation(){
    return(
        <>
        <Header/>
        <div className="fullscreen">    
        <div className="Parent-Gallery">
        <h1 className="maintopic"> CONTACT </h1>
        <h1 className="maintopicbelow"><span> Information </span></h1>
        <br /><br />
        <h5> Company Name </h5>
        <p> 1234 Sample Street Austin Texas 76401 </p>
        <br />
        <h5> 512.333.2222 </h5>
        <br /><br />
        sampleemail@gmail.com
        <Link href={"/contact"}><button className="contact-button"> Contact Us </button></Link>
        
        </div>
            <div className="MapPicture" >
                <img src="googleMaps.png" alt="map"  className="contact-picture"/>
            </div>
        </div>
        <Footer/>
        </>
    )
}