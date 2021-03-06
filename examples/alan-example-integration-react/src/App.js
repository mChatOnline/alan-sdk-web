import React from 'react';
import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.alanBtnInstance = null;
  }

  componentDidMount() {
    this.alanBtnInstance = alanBtn({ 
      key: '314203787ccd9370974f1bf6b6929c1b2e956eca572e1d8b807a3e2338fdd0dc/prod'
     });
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <img src="https://alan.app/voice/images/previews/preview.jpg"
          className="Alan-logo" alt="logo" />
        <ul>
          <li>Say: "Hi!"</li>
          <li>Say: "What is Alan Platform?"</li>
        </ul>
      </header>
    </div>
  }
}

export default App;