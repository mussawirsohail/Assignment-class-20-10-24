import Header from "../components/header";
import Footer from "../components/footer";
export default function Gallety(){
    return(
        <>
        <Header/>
        <div className="Parent-Gallery">
            <h1 className="maintopic">Photo</h1>
            <h1 className="maintopicbelow">Gallery</h1>
        </div>
            <div className="gallery-pic">
                <img src="gallery-1.png"className="Gallerypicture"/>
                <img src="gallery-2.png"className="Gallerypicture"/>
                <img src="gallery-3.png"className="Gallerypicture"/>
                <img src="gallery-4.png"className="Gallerypicture"/>
                <img src="gallery-5.png"className="Gallerypicture"/>
            </div>
            <div className="gallery-pic">
                    <img src="gallery-6.png"className="Gallerypicture"/>
                    <img src="gallery-7.png"className="Gallerypicture"/>
                    <img src="gallery-8.png"className="Gallerypicture"/>
                    <img src="gallery-9.png"className="Gallerypicture"/>
                    <img src="gallery-10.png"className="Gallerypicture"/>
            </div>
            <Footer/>
        </>
    )
}