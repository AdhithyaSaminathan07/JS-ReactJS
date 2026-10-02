import PropTypes from 'prop-types'
import { useContext } from 'react'
import { UserContext } from '../App'

const ProductDetails = ({deepName= "SamSung S26 Ultra", deepPrice = 2000, deepDescription = "256GB storage and 12GB RAM with 4K display"}) => {
    // console.log(props);

  let {user}=useContext(UserContext)
// console.log(user);

  return (
    <section>
      <article>
        <h3>UserName:{user.uName}</h3>
        <h3>Email:{user.email}</h3>
      </article>
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

