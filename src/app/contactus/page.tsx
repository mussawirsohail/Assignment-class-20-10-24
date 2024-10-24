export default function Contactus(){
    return(
        <>
        <div className="parent-contact">
            <h2>Contact Us</h2>
            <div className="child-contact">
                    <div className="Contact-length">
                        <form action={""}>
                        <input type="text"placeholder="Name"className="Contact-form"required/>
                        <input type="number"placeholder="Phone No"className="Contact-form"required/>
                        <input type="text"placeholder="Email"className="Contact-form"required/>
                        <input type="text"placeholder="Interested In"className="Contact-form"required/>
                        <input type="text"placeholder="Message"className="Contact-form-message"required/>
                    </form>
                </div>
                <div>
                    <img src="contactus-pic.png"className="contactus-pic"/>
                </div>
            </div>
            <button className="contact-button"> Send Email  → </button>
        </div>
        </>
    )
}