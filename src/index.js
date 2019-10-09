import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dob: new Date(),
      draggingStyles: {
        position: 'relative'
      }
    };
  }

  componentDidMount() {
    this.setState({ dob: new Date("04-26-2019") });
  }

  setDobToNow = () => this.setState({ dob: new Date() })

  handleDragChange = ({ clientX, clientY }) =>
    this.setState(prevState => ({
      draggingStyles: {
        ...prevState.draggingStyles,
        ...{ top: clientY, left: clientX, transform: 'translate(-50%, -50%)' }
      }
    }))

  render() {
    return (
      <div className="App">
        <div className="card"
          style={this.state.draggingStyles}
          draggable
          onDragStart={() => {
            console.log('Dragged');
          }}
          onDragEnd={(e) => this.handleDragChange(e)}
        >
          <div className="header">
            <div><span>Earth-616</span></div>
            <div><span>S.H.I.E.L.D.</span></div>
            <div><span>678-136-7092</span></div>
          </div>
          <div className="name">
            <span style={{ fontWeight: "bold", fontStyle: "italic", color: "black" }}>Capt. Steve Rogers</span>
          </div>
          <div className="dob" onClick={this.setDobToNow}>{this.state.dob.toLocaleString()}</div>
          <div className="margin-top-40">Stark Industries</div>
          <div className="margin-top-40">Avengers Facility, Upstate, New York</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
