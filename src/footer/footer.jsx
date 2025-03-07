import React from 'react'
import './footer.css'
// import fb from "../assets/fbimg.png";
// import twiter from "../assets/twitterimg.png";
// import linkedin from "../assets/linkedinimg.png";
// import insta from "../assets/instaimg.png";


const Footer = () => {
    return (

        
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className="sb_footer-links">
                <div className="sb_footer-links_div">

                        <h4>For Business</h4>

                        <a href='/employer'>
                            <p>Employeer</p>
                        </a>

                        <a href='/healthplan'>
                            <p>Health Plan</p>
                        </a>

                        <a href='/individual'>
                            <p>Individual</p>
                        </a>

                    </div>

                    <div className='sb_footer-links_div'>
                        <h4>Resources</h4>

                        <a href='/resources'>
                            <p>Resources Center</p>
                        </a>

                        <a href='/resources'>
                            <p>Testimonials</p>
                        </a>

                        <a href='/resources'>
                            <p>STV</p>
                        </a>

                    </div>

                    <div className="sb_footer-links_div">
                        <h4>Parterns</h4>
                        <a href='/resources'>
                            <p>Swing Tech</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div">
                        <h4>Company</h4>

                        <a href='/about'>
                            <p>About</p>
                        </a>

                        <a href='/press'>
                            <p>Press</p>
                        </a>

                        <a href='/career'>
                            <p>Career</p>
                        </a>

                        <a href='/contact'>
                            <p>Contact</p>
                        </a>

                    </div>

                    <div className="sb_footer-links_div">
                        <h4>Coming soon on</h4>

                        <div className="socialmedia">
                            <p><img src={fb} alt=''></img></p>
                            <p><img src={twiter} alt=''></img></p>
                            <p><img src={linkedin} alt=''></img></p>
                            <p><img src={insta} alt=''></img></p>
                        </div>
                    </div>

                </div>


            <hr></hr>


            <div className="sb_footer-below">
                <div className="sb_footer_copyright">
                    {/* <p>
                        @(new Date().getFullYear()) CodeInn. All right reseved.
                    </p> */}

                        <p>
                        &copy; {new Date().getFullYear()} CodeInn. All rights reserved.
                        </p>

                </div>

                <div className="sb_footer-below-links">
                    <a  href='/terms'>
                        <p>Terms & Conditions</p>
                    </a>

                    <a  href='/privacy'>
                        <p>Privacy</p>
                    </a>

                    <a  href='/security'>
                        <p>Security</p>
                    </a>

                    <a  href='/cookie'>
                        <p>Cookie Declaration</p>
                    </a>
                </div>
            </div>
            

            </div>
        </div>
    )
}

export default Footer;
