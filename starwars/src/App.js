import React from 'react';
import CharacterList from './components/CharacterList/CharacterList';
// import DogList from './components/Dog/DogList';
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
      // dogList: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // componentDidMount() {
  //   this.getDogs('https://dog.ceo/api/breeds/image/random');
  // }

  // getDogs = URL => {

  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ dogList: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList character={this.state.starwarsChars} />
        {/* <DogList dog={this.state.dogsList} /> */}
      </div>
    );
  }
}

export default App;
