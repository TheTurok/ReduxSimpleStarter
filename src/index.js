import React, {Component} from 'react'; //used to create and manage components
import ReactDOM from 'react-dom'; //interact with actual DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyClMcNtXNHe5kpeSb-PbNgxx5da4JXz-bc'; //youtube api

// DOM == Document Object Model
class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });

  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
//component is function or objext that spits html
ReactDOM.render(<App />, document.querySelector('.container')); //mkaing a jsx tag creats an instance
  //make use of component, wrap it arounf jsx tag


  //one component per file
