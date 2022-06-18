import React from 'react';

class AppSearch extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler({ target }) {
    this.props.onSearch(target.value);
  }

  render() {
    return (
      <div className="noshen-search">
        <input
          type="search"
          placeholder="Search.."
          onChange={this.onSearchHandler}
        />
      </div>
    );
  }
}

export default AppSearch;
