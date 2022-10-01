import React, { Component } from 'react'
import Search from './components/Search';

class App extends Component {
  state = {}
  render() {
    return (
      <div className='ui grid container center aligned'>
        <div className='column eight wide'>
          <Search />;
        </div>
      </div>
    )
  }
}

export default App;