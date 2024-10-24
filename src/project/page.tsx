export default function Projects(){
    return(
        <>
        <div className="parentproject">
            <h2>Our Projects</h2>
            <div className="piccontainer">
                <img src="pro-1.png"className="pro1"/>
                <img src="pro-2.png"className="pro2"/>
            </div>
                <div className="piccontainer">
                    <img src="pro-3.png"className="pro3"/>
                    <img src="pro-4.png"className="pro4"/>
                    <img src="pro-5.png"className="pro5"/>
                </div>
                    <button className="projectbutton"> ALL PROJECTS → </button>
        </div>
        </>
    )
}