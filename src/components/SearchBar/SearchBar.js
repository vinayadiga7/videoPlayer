import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchParam: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchComplete(this.state.searchParam);
  };

  onInputChange = (event) => {
    this.setState({
      searchParam: event.target.value,
    });
  };

  render() {
    return (
      <div className="search-1 ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="global-search">Video Search</label>
            <input
              type="text"
              id="global-search"
              placeholder="type in key for search"
              value={this.state.searchParam}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
