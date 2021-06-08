
import React from "react";
import styles from "./ContactScreen.module.css";

class ContactScreen extends React.Component {
	render() {
		return (
			<div class={styles.canvas}>
				<div class={styles.header}>
					<h1>Get in Touch</h1>
				</div>
				<form>
					<h1>Get in Touch</h1>
					<input type="text" name="name" placeholder="Name"/>
					<input type="text" name="email" placeholder="Email"/>
					<input type="text" name="subject" placeholder="Subject"/>
					<textarea name="message" placeholder="Message" cols="5"></textarea>
					<input type="submit" name=""/>
				</form>
			</div>
		)
	}
}

export default ContactScreen;