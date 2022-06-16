import React from 'react';

class AppSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      keyword: '',
    }
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler (event) {
    this.setState({ keyword: event.target.value });
  }

  render() {
    return (
      <div className="noshen-search">
        <input type="search" placeholder="Search.." value={this.state.keyword} onChange={this.onSearchHandler} />
      </div>
    );
  }

}

export default AppSearch;