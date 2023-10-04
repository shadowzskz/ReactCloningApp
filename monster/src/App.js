import React, { Component } from 'react';
import CardList from './components/card-list/CardList-component';
import Searchbox from './components/search_box/Searchbox_component'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchFeild: e.target.value})
  }

  render() {
    const { monsters, searchFeild } = this.state;
      const filterMonsters =  monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1 className="heading">Monsters</h1>
        <Searchbox 
          placeholder='search monsters'
          handleChange= {this.handleChange}
        />
        <CardList monsters={filterMonsters} />            
      </div>
    );
  }
}

export default App;
