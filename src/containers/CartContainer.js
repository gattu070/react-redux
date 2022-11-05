import { connect } from "react-redux";
import { Cart } from "../components/Cart";

const mapStateToProps = state => ({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    // addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);