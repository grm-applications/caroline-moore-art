
import React from "react";
import styles from "./GalleryScreen.module.css";
import GalleryPiece from "../../components/GalleryPiece/GalleryPiece.js";

class GalleryScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			artwork: [],
		}
	}

	componentDidMount(props) {
		fetch("http://localhost:5000/gallery")
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({artwork: data, isLoading: false})
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {

		return (
			<div>
				<div class={styles.canvas}>
					<div class={styles.header}>
						<h1>Gallery</h1>
					</div>
					<div class={styles.gallery}>
						{this.state.artwork.map((element, index) => {
							return <GalleryPiece key={index} id={index + 1} title={element.title} author={element.author} price={element.price} image={element.url}/>
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default GalleryScreen;