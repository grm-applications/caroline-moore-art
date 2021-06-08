
import React from "react";
import styles from "./GalleryPiece.module.css";
import { Link } from "react-router-dom";


class GalleryPiece extends React.Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<div class={styles.canvas}>
				<div class={styles.imageContainer}>
					<Link to={{pathname: `/gallery:${this.props.id}`, state: {modalIsShown: true}}}><img src={this.props.image}/></Link>
				</div>
				<Link to={{pathname: `/gallery:${this.props.id}`, state: {modalIsShown: true}}} style={{textDecoration: "none"}}><h1 class={styles.title}>{this.props.title}</h1></Link>
				<Link to="/about" style={{textDecoration: "none"}}><h2 class={styles.author}>{this.props.author}</h2></Link>
				<h3 class={styles.price}>{this.props.price}</h3>
			</div>
		)
	}
}

export default GalleryPiece;
