// const Images = function (props) {
//   return (
//     <div className="images">
//       <img src={props.src} alt="foto react" />
//     </div>
//   );
// };

// export default Images;

import { Component } from "react";

class Images extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.altDesc} className="images" />;
  }
}

export default Images;
