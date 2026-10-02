import PropTypes from 'prop-types'

const ProductDetails = ({deepName= "SamSung S26 Ultra", deepPrice = 2000, deepDescription = "256GB storage and 12GB RAM with 4K display"}) => {
    // console.log(props);
  return (
    <section>
        <h3>{deepName}</h3>
        <p>{deepPrice}</p>
        <p>{deepDescription}</p>
    </section>
  )
}

export default ProductDetails

// ProductDetails.defaultProps = {
//     deepName: "SamSung S26 Ultra",
//     deepPrice: 2000,
//     deepDescription: "256GB storage and 12GB RAM with 4K display",
// }

ProductDetails.propTypes = {
    deepName: PropTypes.string.isRequired,
    deepPrice: PropTypes.number.isRequired,
    deepDescription: PropTypes.string.isRequired
}

