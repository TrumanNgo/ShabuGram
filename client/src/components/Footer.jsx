export default function Footer(){
    return (
        <footer className="footer-box">
            <h1 style = {{
                color: "white",
                textAlign: "center",
                marginTop: "10px",
            }}>
                A small project from a new Developer!
            </h1>
            <div className="footer-container">
                <div className="row">
                    <div className="column">
                        <div className="heading">
                            About me
                        </div>
                        <div className="footer-link">
                            Aim
                        </div>
                        <div className="footer-link">
                            Vision
                        </div>
                    </div>
                    <div className="column">
                        <div className="heading">
                            Contact Info
                        </div>
                        <div className="footer-link">
                            <span>
                            Email: shabuthecorgi@shabugram.com   
                            </span>
                        </div>
                        <div className="footer-link">
                            <span>
                            Phone # : 123-456-7890  
                            </span>
                        </div>
                    </div>
                    <div className="column">
                        <div className="heading">
                            Social Media
                        </div>
                        <div className="footer-link">
                            Furbook
                        </div>
                        <div className="footer-link">
                            DogLinkedout
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}