import React, { Component } from "react";
import { Input } from "reactstrap";

class SearchIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      filtered: "",
    };
  }

  searchFunction = (e) => {
    this.setState({ filtered: e.target.value });
    console.log(this.state.filtered);
  };

  render() {
    return (
      <div>
        <Input placeholder="Search Here" onChange={this.searchFunction} />
        <h3>Results:</h3>
        <ul>
          {this.state.things
            .filter((item) => item.includes(this.state.filtered))
            .map((thing) => (
              <li key={thing}>{thing}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default SearchIndex;
