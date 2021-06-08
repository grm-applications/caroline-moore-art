
import React from "react";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";
import data from "../../screens/GalleryScreen/art.json";

class Modal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isShowing: this.props.isShowing,
			productId: this.props.productId
		};
	}

	fetchPreviousProduct() {
		this.setState({productId: this.state.productId == 0 ? data.artwork.length - 1 : this.state.productId - 1})
	}

	fetchNextProduct() {
		this.setState({productId: this.state.productId == data.artwork.length - 1 ? 0 : this.state.productId + 1})
	}
 

	render() {
		return (
			<div class={styles.canvas} style={this.state.isShowing == true ? {display: "flex"} : {display: "none"}}>
				<button onClick={() => this.fetchPreviousProduct()} class={styles.nextButton} style={{transform: "scaleX(-1)"}}>&#10140;</button>
				<Link to={"/gallery"}><button class={styles.closeButton} onClick={this.props.onClick}>&#10005;</button></Link>
				<div class={styles.modal}>
					<div class={styles.imageContainer}>
						<img src={this.state.productId != undefined ? data.artwork[this.state.productId].url : null}/>
					</div>
					<div class={styles.infoContainer}>
						<h1>{this.state.productId != undefined ? data.artwork[this.state.productId].title : null}</h1>
						<p>Some beautifal artwork</p>
						<button onClick={() => console.log("added to cart")}>Add to Cart</button>
					</div>
				</div>
				<button onClick={() => this.fetchNextProduct()} class={styles.nextButton}>&#10140;</button>
			</div>
		)
	}
}

export default Modal;