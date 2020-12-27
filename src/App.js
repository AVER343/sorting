import React from 'react';
import SortingHeader from './components/sortingHeader/sortingHeader';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      sorting:1
    }
  }
  render(){
    return (
      <div className="App">
       <SortingHeader sorting={this.state.sorting}/>
       
      </div>
    );
  }
}

export default App;
