
import React from "react";
import styles from "./GalleryScreen.module.css";
import data from "./art.json";
import GalleryPiece from "../../components/GalleryPiece/GalleryPiece.js";
import Modal from "../../components/Modal/Modal.js";

class GalleryScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			artwork: [],
			modalIsShown: this.props.showModal
		}
	}

	componentDidMount(props) {
		this.setState({artwork: data.artwork})
		// this.setState({modalIsShown: this.props.location.state.modalIsShown})
	}

	toggleModal = () => {
		this.setState({modalIsShown: !this.state.modalIsShown});
		console.log(this.state.modalIsShown)
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
							return <GalleryPiece key={index} id={index} title={element.title} author={element.author} price={element.price} image={element.url}/>
						})}
					</div>
				</div>
				<Modal onClick={this.toggleModal} productId={this.props.productId} isShowing={this.state.modalIsShown}/>
			</div>
		)
	}
}

export default GalleryScreen;