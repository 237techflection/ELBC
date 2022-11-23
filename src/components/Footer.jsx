import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                    Lorem impsum
                </p>
                <div className="footer_socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer nooperer">
                        <FaLinkedin/>
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer nooperer">
                        <FaFacebookF/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer nooperer">
                        <AiOutlineTwitter/>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer nooperer">
                        <AiFillInstagram/>
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalink</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">contact</Link>
            </article>
            <article>
                <h4>Permalink</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer_copyright">
            <small>200 TechFlection &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer