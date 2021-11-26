import "./footer.scss"
import * as React from "react"
import PropTypes from "prop-types"
import redsys from '../assets/redsys.png'


const Footer = ( props ) => (
  <footer className="footer">
    <div className="redsys-container">
      <p>Powered by</p>
      <img className="redsys-logo" src={redsys} alt="redsys" />
    </div>
    <div className="footer-links">
      <a href="#" className="footer-link">Terms</a>
      <a href="#" className="footer-link">Privacy</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer