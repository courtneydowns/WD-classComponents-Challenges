import React from "react";
import CatList from "./CatList";

const breeds = [
  "persian",
  "siamese",
  "maine coon",
  "ragdoll",
  "scottish fold",
  "sphynx",
  "british shorthair",
  "bengal",
  "american shorthair",
];

class CatIndex extends React.Component {
  // constructor() {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <CatList breeds={breeds} />
      </div>
    );
  }
}

export default CatIndex;
