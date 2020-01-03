import React from "react";

import MenuItem from "../menu-item/menu-item";

import "./directory.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl: "./images/hats.jpg",
          id: 1
        },
        {
          title: "Jakcets",
          imageUrl: "./images/jackets.jpg",
          id: 2
        },
        {
          title: "Shoes",
          imageUrl: "./images/shoes.jpg",
          id: 3
        },
        {
          title: "Womens",
          imageUrl: "./images/girl.jpg",
          size: "large",
          id: 4
        },
        {
          title: "Mens",
          imageUrl: "./images/boy.jpg",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
