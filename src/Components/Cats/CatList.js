import React, { Component } from "react";

class CatList extends React.Component {
  render() {
    const cats = () => this.props.breeds.map((breed) => <li>{breed}</li>);
    return (
      <div>
        <ul>{cats()}</ul>
      </div>
    );
  }
}

export default CatList;
