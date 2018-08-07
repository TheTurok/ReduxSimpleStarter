import React from 'react'; //used to create and manage components
import ReactDOM from 'react-dom'; //interact with actual DOM
// DOM == Document Object Model
const App = () => {
  return <div> Hi! </div>;
}
//component is function or objext that spits html
ReactDOM.render(<App />, document.querySelector('.container')); //mkaing a jsx tag creats an instance
  //make use of component, wrap it arounf jsx tag


  //one component per file 
