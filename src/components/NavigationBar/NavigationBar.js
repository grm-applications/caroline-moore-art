
import React from "react";
import styles from "./NavigationBar.module.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import icon from "../../assets/shopping-cart.svg"


class NavBar extends React.Component {

	render() {
		return (
			<div class={styles.navbar}>
				<Link to="/" class={styles.navlogo} href=""><img src={logo}/></Link>
				<div class={styles.navitems}>
					<Link to="/about">ABOUT</Link>
					<Link to="/gallery">GALLERY</Link>
					<Link to="/contact">CONTACT</Link>
					<Link to="/basket"><img style={{fill:"white"}} src={icon}/></Link>
				</div>
			</div>
		)
	}
}

export default NavBar;