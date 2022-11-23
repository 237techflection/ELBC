import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import './about.css'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum
    </Header>
    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt="Our Story Image"/>
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam 
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam 
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam 
          </p>
        </div>
      </div>
    </section>
    <section className="about_Vision">
      <div className="container about_Vision-container">
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam 
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam 
          </p>
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt="Our Vision Image"/>
        </div>
      </div>
    </section>
    <section className="about_Mission">
      <div className="container about_Mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt="Our Mission Image"/>
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam 
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam
            lorem ipsum dolor sit amet, consectetur adipiscing elit in diam 
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About