import Link from "next/link"

export default function Header(){
    return(
        <div className="parentcontainer">
            <div>
                <img src="headerpic.png" className="headerpicture"/>
            </div>
                <div>
                    <ul className="headertext">
                       <Link href={"mainpage"}><li className="mainheader">MAIN</li></Link> 
                       <Link href={"gallery"}><li>GALLERY</li></Link> 
                        <Link href={"Projects"}><li>PROJECTS</li></Link>
                        <Link href={"certification"}><li>CERTIFICATES</li></Link>
                        <Link href={"contact"}><li>CONTACTS</li></Link>
                    </ul>
                </div>
        </div>
    )
}