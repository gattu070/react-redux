import { connect } from "react-redux";
import { addToCart, addToWish } from "../services/actions/action";
import { Home } from "../components/Home";

const mapStateToProps = state => ({
    // data: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    addToWishHandler: wdata => dispatch(addToWish(wdata))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);