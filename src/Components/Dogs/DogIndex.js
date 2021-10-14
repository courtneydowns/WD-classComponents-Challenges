import React from "react";

class FetchDog extends React.Component {
  url = "https://dog.ceo/api/breeds/image/random";

  constructor(props) {
    super(props);
    this.state = { dogData: "" };
  }

  handleFetch = async () => {
    try {
      const response = await fetch(this.url);
      const jsonData = await response.json();
      console.log(jsonData);
      console.log(jsonData.message);
      this.setState({
        dogData: jsonData.message,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleFetch}>Get Doggo Pic</button>
        <img src={this.state.dogData} alt="" />
      </div>
    );
  }
}

export default FetchDog;
