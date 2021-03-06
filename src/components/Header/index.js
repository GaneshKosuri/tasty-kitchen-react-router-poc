import {Component} from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  state = {isClicked: false}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderIconContainer = () => (
    <Link to="/" className="nav-bar-icon-link" style={{textDecoration: 'none'}}>
      {/* <div className="nav-bar-icon-container"> */}
      <img
        src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625742512/Frame_274_zlrzwk.svg"
        alt="website logo"
        className="nav-bar-icon-img"
      />
      {/* <h1 className="nav-bar-icon-heading">Tasty Kitchen</h1> */}
      {/* </div> */}
    </Link>
  )

  renderNavList = () => (
    <div className="list-container">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/cart" className="nav-link">
        Cart
      </Link>
    </div>
  )

  render() {
    const {isClicked} = this.state
    return (
      <>
        <nav className="nav-bar">
          <div className="desktop-nav-bar-container">
            {this.renderIconContainer()}
            <div className="nav-bar-link-items-container">
              {this.renderNavList()}
              <Link to="/login" style={{textDecoration: 'none'}}>
                <button
                  className="desktop-logout-btn"
                  type="button"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
          <div className="mobile-nav-bar-container">
            {this.renderIconContainer()}
            <button
              type="button"
              className="menu-btn"
              onClick={() => {
                this.setState({isClicked: !isClicked})
              }}
            >
              {/* <FaBars className="FaBars " /> */}
            </button>
          </div>
        </nav>
        {isClicked && (
          <div className="mobile-menu-list">
            {this.renderNavList()}
            <Link to="/login" className="nav-link-button">
              <button
                className="mobile-logout-btn"
                type="button"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </Link>
          </div>
        )}
      </>
    )
  }
}

export default Header
