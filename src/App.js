import logo from './logo.svg';
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import GalleryScreen from "./screens/GalleryScreen/GalleryScreen.js";
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen/ContactScreen.js";
import ProductScreen from "./screens/ProductScreen/ProductScreen.js";
import BasketScreen from "./screens/BasketScreen/BasketScreen.js";
import './App.css';

class App extends React.Component {

	render() {
		return (
		  	<BrowserRouter>
				<div className="App">
				  <NavigationBar/>
				  <Route path="/" component={HomeScreen} exact/>
				  <Route path="/contact" exact component={ContactScreen}/>
				  <Route path="/basket" exact component={BasketScreen}/>
				  <Route path="/gallery" exact render={(props) => <GalleryScreen showModal={false}/>}/>
				  <Route path="/gallery:id" exact component={ProductScreen}/>
				</div>
		    </BrowserRouter>
		)
	}
}

export default App;
