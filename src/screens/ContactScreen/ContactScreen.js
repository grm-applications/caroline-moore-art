
import React from "react";
import styles from "./ContactScreen.module.css";



class ContactScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			name: "",
			email: "", 
			subject: "",
			message: "",
		}
	}

	nameInputChanged = (event) => {
		this.setState({name: event.target.value})
	}

	emailInputChanged = (event) => {
		this.setState({email: event.target.value})
	}

	subjectInputChanged = (event) => {
		this.setState({subject: event.target.value})
	}

	messageInputChanged = (event) => {
		this.setState({message: event.target.value})
	}

	submitHandler = (event) => {
		event.preventDefault();
		const data = {
			name: this.state.name,
			email: this.state.email,
			subject: this.state.subject,
			message: this.state.message
		};
		const options = {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "http://localhost:3000"
			}
		};
		fetch("http://localhost:5000/contact", options)
		this.setState({name: "", email: "", subject: "", message: ""})
	}




	render() {
		return (
			<div class={styles.canvas}>
				<form>
					<h1>Get in Touch</h1>
					<input type="text" value={this.state.name} name="name" placeholder="Name" onChange={(event) => {this.nameInputChanged(event)}}/>
					<input type="text" value={this.state.email} name="email" placeholder="Email" onChange={(event) => {this.emailInputChanged(event)}}/>
					<input type="text" value={this.state.subject} name="subject" placeholder="Subject" onChange={(event) => {this.subjectInputChanged(event)}}/>
					<textarea name="message" value={this.state.message} placeholder="Message" cols="5" onChange={(event) => {this.messageInputChanged(event)}}></textarea>
					<input onClick={(event) => {this.submitHandler(event)}}type="submit" name=""/>
				</form>
			</div>
		)
	}
}

export default ContactScreen;