import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
//state object will contain properties for everything we want to store
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;
    //we have to use this.setState to modify an array
    this.setState({
      //filter the array based on an index that we pass through.
      //Filter does not mutate but creates a new array, is a preferred method
      characters: characters.filter((character, i) => {
        //return the new array
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState ({characters: [...this.state.characters, character]});
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
