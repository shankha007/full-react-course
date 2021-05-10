import React, { Component } from 'react';
import './App.css';
import Char from './CharComp/Char';
import Validation from './ValidationComp/Validation';

class App extends Component {
  state = {
    userInput: ''
  }
  textLengthHandler = (event) => {
    this.setState({userInput: event.target.value});
  }
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char character={ch} key={index} clicked={this.deleteCharHandler.bind(this,index)} />;
    });

    return (
      <div className="App">
        <input type="text" onChange={this.textLengthHandler.bind(this)} value={this.state.userInput} />
        <p>Length of the text is {this.state.userInput.length}</p>
        <Validation textLen={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
