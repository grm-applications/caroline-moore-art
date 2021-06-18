
import React from 'react';
import styles from "./ProductScreen.module.css";

class ProductScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			productId: parseInt(this.props.match.params.id.substring(1)),
			productInfo: {}
		}
	}

	componentDidMount() {
		fetch(`http://localhost:5000/gallery:${this.state.productId}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({productInfo: data[0], isLoading: false})
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			<div class={styles.canvas}>
				<img src={this.state.productInfo.url}/>
				<div class={styles.info}>
					<h1>{this.state.productInfo.title}</h1>
					<h2>{this.state.productInfo.price}</h2>
					<button>Add to Basket</button>
				</div>
			</div>
		)
	}
}

export default ProductScreen;