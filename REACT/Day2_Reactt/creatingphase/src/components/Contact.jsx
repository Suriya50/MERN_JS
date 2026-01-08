
import contact from "../assets/images/contacts.png"

const Contact = () => {

    return (


        <>
            <center>

                <section className="contact">
                    <h2>Contact Us</h2>


                    <div className="contact-info">
                        <p>Email: example@gmail.com</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Location: Chennai, India</p>
                    </div>


                    <div>

                        <img src={contact} alt="datssss" style={{ height: "550px", width: "50%", marginTop: "10px", alignItems: "center", textAlign: "center", borderRadius: "12px", marginLeft: "5%" }} />
                    </div>
                </section>
            </center>

        </>
    )



}

export default Contact;