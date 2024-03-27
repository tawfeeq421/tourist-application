
import Header from "./Header.js"
import Citycard from "./citycard.js";
import Cardlist from "./cardlist.js";
import Container from "./container.js";
import "./App.css"

function App(){

    return<div>
         <div id="Box">
        <Header/>   
    </div>

    <h2>Go local in <mark>Charming Cities</mark></h2>
    <h1>Find a private guided tour with one of our locals</h1>
    
    <Cardlist/>

    
     <Container/>



    </div>
   







}
export default App;