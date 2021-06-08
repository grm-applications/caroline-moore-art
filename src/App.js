import logo from './logo.svg';
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import GalleryScreen from "./screens/GalleryScreen/GalleryScreen.js";
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen/ContactScreen.js";
import ProductScreen from "./screens/ProductScreen/ProductScreen.js";
import BasketScreen from "./screens/BasketScreen/BasketScreen.js";
import './App.css';

function App() {
  return (
  	<BrowserRouter>
		<div className="App">
		  <NavigationBar/>
		  <Route path="/" component={HomeScreen} exact/>
		  <Route path="/gallery" exact render={(props) => <GalleryScreen showModal={false}/>}/>
		  <Route path="/contact" component={ContactScreen}/>
		  <Route path="/gallery:productId" exact render={(props) => <GalleryScreen showModal={true} productId={parseInt(props.match.params.productId.substring(1))}/>}/>
		  <Route path="/basket" exact component={BasketScreen}/>
		</div>
    </BrowserRouter>
  );
}

export default App;
