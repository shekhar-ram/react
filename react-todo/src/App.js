import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {text: '', key: ''},
    }
  }

  handleInput = event => {
    const itemText = event.target.value;
    const currentItem = { text: itemText, key: Date.now() }
    this.setState( {currentItem} );
  }

  addItem = event => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: ''}
      });
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          />
        <TodoItems 
          entries={this.state.items} 
          deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
