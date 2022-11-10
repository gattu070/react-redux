import { connect } from "react-redux";
import { Wishlist } from "../components/Wishlist";
// import { addToWish } from "../services/actions/action";

const mapStateToProps = state => ({
    wdata: state.wishItems
})

const mapDispatchToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);