
import React from 'react';
import styles from "./ProductScreen.module.css";
import data from "../GalleryScreen/art.json";
import Modal from "../../components/Modal/Modal.js";

class ProductScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {productId: parseInt(this.props.match.params.productId.substring(1))}
	}

	componentDidMount() {
		console.log(this.props)
	}

	render() {
		return (
			<div class={styles.canvas}>
				<img src={data.artwork[this.state.productId].url}/>
				<h1>{data.artwork[this.state.productId].title}</h1>
			</div>
		)
	}
}

export default ProductScreen;