import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_5.jpg"
import {trainers} from "../../data"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import Trainer from "../../components/Trainer"
import "./trainers.css"

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
      lorem ipsum dolor sit amet, consect, lorem ipsum dolor,
      lorem ipsum dolor sit amet, consect, lorem ipsum dolor,
      </Header>
      <section className="trainers">
          <div className="container trainers_container">
            {
              trainers.map(({id, image, name, job, socials}) => {
                return <Trainer key={id} image={image} name={name} socials={
                  [
                    {icon: <BsInstagram/>, link: socials[0]},
                    {icon: <AiOutlineTwitter/>, link: socials[1]},
                    {icon: <FaFacebookF/>, link: socials[2]},
                    {icon: <FaLinkedinIn/>, link: socials[3]}
                  ]
                }/>
              })
            }
          </div>
        </section>
    </>
  )
}

export default Trainers