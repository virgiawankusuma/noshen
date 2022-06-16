import React from 'react';
import { getInitialData } from '../utils/index';

import AppHeader from './AppHeader';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      contacts: getInitialData(),
    }
  }

  render() {
    return (
      <AppHeader />
    );
  }

}

export default App;
