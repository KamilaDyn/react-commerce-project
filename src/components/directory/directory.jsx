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
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "Jakcets",
          imageUrl: "./images/jackets.jpg",
          id: 2,
          linkUrl: "jackets"
        },
        {
          title: "Shoes",
          imageUrl: "./images/shoes.jpg",
          id: 3,
          linkUrl: "shoes"
        },
        {
          title: "Womens",
          imageUrl: "./images/girl.jpg",
          size: "large",
          id: 4,
          linkUrl: "womens"
        },
        {
          title: "Mens",
          imageUrl: "./images/boy.jpg",
          size: "large",
          id: 5,
          linkUrl: "mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
