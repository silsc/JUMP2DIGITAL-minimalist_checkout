import "./product.scss"
import * as React from "react"
import PropTypes from "prop-types"
import { FaArrowLeft } from 'react-icons/fa'
import { IconContext } from "react-icons";
import laptop from '../assets/laptop.png'


const Product = ( props ) => (
  <div className="product-container">
    <div className="back-container">
    <IconContext.Provider value={{ className: "back-arrow", size: "1em" }}>
      <p><FaArrowLeft /></p>
    </IconContext.Provider>
      <a role="button" href="#" className="back-btn"> Back to the market</a>
    </div>
    <div className="product-info-container">
      <div className="product-info">
        <h2 className="product-name">{props.name}</h2>
        <h1 className="product-price">{props.price}</h1>
      </div>
      <img className="product-img" src={laptop} alt="Laptop" />
    </div>
  </div>
)

Product.propTypes = {
  siteTitle: PropTypes.string,
}

Product.defaultProps = {
  siteTitle: ``,
}

export default Product