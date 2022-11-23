import { Link } from "react-router-dom"
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Header</h1>
          <p>Je suis un étudiant à la recherche d'un travail pour s'assurer d'un avenir radieux</p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Image"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader