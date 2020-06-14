import React,{Component} from 'react';
import './App.css';
import Nav from './Nav/Nav'
import ImageBox from './ImageBox/ImageBox'
class App extends Component {
  state = {

  }

  render() {
    return ( <
      div id = "app" >
          <Nav />
          <ImageBox />
      </div>
    );
  }
}

export default App;
