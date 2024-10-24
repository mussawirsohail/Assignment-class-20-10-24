import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import SampleProject1 from "../sampleproject1/page";
export default function Myproject(){
    return(
        <>
        <Header/>
        <div className="Parent-Gallery">
        <h1 className="maintopic">Our</h1>
        <h1 className="maintopicbelow">Project</h1>
        </div>
        <div className="sampleproject">
            <div className="project-pic">
                <img src="project1-pic.png"className="project-pic"/>
                </div>
                <div className="sample-text">
                <h2>Sample Project</h2>
                <p className="sample-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste, blanditiis corporis, numquam quisquam itaque enim praesentium sit nostrum modi similique perspiciatis sequi magni doloribus tempore fugiat. Hic, quo deserunt.</p>
                <Link href={"sampleproject1"}><button className="view-more"> View More → </button></Link>
                </div>
        </div>
        <div className="sampleproject">
            <div className="project-pic">
                <img src="project2-pic.png"className="project-pic"/>
            </div>
            <div className="sample-text">
                <h2>Sample Project 2</h2>
                <p className="sample-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste, blanditiis corporis, numquam quisquam itaque enim praesentium sit nostrum modi similique perspiciatis sequi magni doloribus tempore fugiat. Hic, quo deserunt.</p>
                <button className="view-more"> View More → </button>
            </div>
        </div>
        <div className="sampleproject">
            <div className="project-pic">
                <img src="project3-pic.png"className="project-pic"/>
            </div>
            <div className="sample-text">
                <h2>Sample Project 3</h2>
                <p className="sample-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste, blanditiis corporis, numquam quisquam itaque enim praesentium sit nostrum modi similique perspiciatis sequi magni doloribus tempore fugiat. Hic, quo deserunt.</p>
                <button className="view-more"> View More → </button>
            </div>
        </div>
        <Footer/>
        </>
    )
}