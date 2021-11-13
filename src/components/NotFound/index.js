import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dj7inbtyj/image/upload/v1628501634/Mini%20Projects/Group_yuetlk.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="page-not-found-heading">PAGE NOT FOUND</h1>
      <p className="page-not-found-description">
        we are sorry, the page you requested could not be found Please go back
        to the homepage
      </p>
      <Link to="/" style={{textDecoration: 'none'}}>
        <button type="button" className="home-btn">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
