
import React from "react";
import styles from "./HomeScreen.module.css";
import profileImage from "../../assets/profile.jpeg";

class HomeScreen extends React.Component {
	render() {
		return (
			<div class={styles.canvas}>
	
				<div class={styles.container}>
					<div>
						<h1>Caroline Moore</h1>
					</div>
					<img src={profileImage}/>
				</div>


			</div>
		)
	}
}

export default HomeScreen;