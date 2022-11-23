import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import {BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get in touch" image={HeaderImage}>
      lorem ipsum dolor sit amet, consect, lorem ipsum dolor,
      lorem ipsum dolor sit amet, consect, lorem ipsum dolor
    </Header>
    <section className='contact'>
      <div className='container contact_container'>
        <div className='contact_wrapper'>
          <a href='mailto:237techflection@gmail.com' target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href='http://m.me/hdcode' target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href='https://wa.me/+237670806848' target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact