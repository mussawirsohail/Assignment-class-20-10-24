import Header from "../components/header";
import Footer from "../components/footer";

export default function SampleProject1(){
    return(
        <>
        <Header/>
        {/* <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1></h1>
                <p></p>
                <button></button>
            </div>
        </div> */}
        <div className="Parent-Gallery">
        <h1 className="maintopic">Sample</h1>
        <h1 className="maintopicbelow"><span>Project1</span></h1>
        </div>
        <div className="sampleproject-pic">
        <img src="SampleProject1.png" alt="picture" className="sampleproject1" />
        </div>
        <div className="mainbody">
            <div className="sampleproject2">
                <img src="SampleProjectPic2.png" alt="picture" className="sampleproject2" />
            </div>
            <div className="project-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis assumenda veritatis molestiae quidem minus distinctio dolore laborum pariatur possimus veniam, sint ipsam facilis soluta nulla similique illum accusantium eum excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi. Ducimus corrupti quas, temporibus quo ratione natus similique perferendis dolor dolore asperiores, nesciunt officia, quae aspernatur! Ducimus saepe aliquid natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea illo totam tempore reiciendis, temporibus delectus, alias quo ab facilis, sequi repellat sapiente a consequuntur. Molestiae dolores ex voluptatum dolorem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat saepe eaque deserunt dicta illo sequi doloribus consequuntur maiores. Ex placeat magni ad illo vero iusto suscipit saepe id veritatis officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sint. Voluptates exercitationem minima illo iusto dolorum perferendis ad aliquid nobis eligendi. Accusamus, laudantium! Inventore voluptatum provident natus dolorum nemo sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in nulla qui impedit possimus dignissimos, minima culpa ad commodi esse veritatis ab iusto cum itaque perferendis quae omnis provident quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, consequatur incidunt repellendus illum dignissimos ipsum explicabo. Quis neque eos quaerat, ipsam accusantium sapiente voluptas maxime consequatur illum ut, at eaque.
                </p>
            </div>
        </div>
        <div className="sampleproject-pic">
            <img src="SampleProjectPic3.png" alt="picture" className="sampleproject1" />
        </div>
        <Footer/>
        </>
    )
}