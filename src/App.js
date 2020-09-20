import React, { Component } from "react";
import "./App.css";
import InputBox from "./Components/InputBox";
import Buttons from "./Components/Buttons";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputOne: "",
      inputTwo: "",
      valueOne: true,
      input: "",
    };
  }

  componentDidUpdate() {
    console.log(
      this.state.inputOne,
      this.state.inputTwo,
      this.state.input,
      this.state.valueOne
    );
  }

  buttonHandler = (value) => {
    if (this.state.valueOne) {
      this.setState((prevState) => ({ inputOne: prevState.inputOne + value }));
    } else {
      this.setState((prevState) => ({ inputTwo: prevState.inputTwo + value }));
    }
    this.setState({ input: this.state.input + value });
  };

  sign = (value) => {
    if (this.state.valueOne) {
      this.setState({ valueOne: false });
    } else {
      this.setState({ valueOne: true });
    }
    this.setState({ input: this.state.inputOne + value + this.state.inputTwo });
  };

  equal = () => {
    let total = 0;
    if (this.state.input.includes("+")) {
      if (this.state.input.includes("-")) {
        total = Number(this.state.inputTwo) + Number(this.state.inputOne);
      } else {
        total = Number(this.state.inputOne) + Number(this.state.inputTwo);
      }
    } else if (this.state.input.includes("-")) {
      if (this.state.input.includes("*")) {
        total = Number(this.state.inputOne) * Number(this.state.inputTwo);
      } else if (this.state.input.includes("/")) {
        total = Number(this.state.inputOne) / Number(this.state.inputTwo);
      } else {
        total = Number(this.state.inputOne) - Number(this.state.inputTwo);
      }
    } else if (this.state.input.includes("*")) {
      total = Number(this.state.inputOne) * Number(this.state.inputTwo);
    } else if (this.state.input.includes("/")) {
      total = Number(this.state.inputOne) / Number(this.state.inputTwo);
    } else {
      console.log("Something is wrong in input 🤬");
      total = Number(this.state.inputOne);
      this.clear();
    }
    console.log(total);
    this.setState({
      inputOne: total.toString(),
      inputTwo: "",
      input: total.toString(),
      valueOne: true,
    });
  };

  percent = () => {
    let total = 0;
    if (this.state.input.includes("+")) {
      total = ((Number(this.state.inputTwo) / 100) * Number(this.state.inputOne)) + Number(this.state.inputOne);
    } else if (this.state.input.includes("-")) {
      total = (Number(this.state.inputTwo) / 100) * Number(this.state.inputOne);
    } else if (this.state.input.includes("*")) {
      total = (Number(this.state.inputTwo) / 100) * Number(this.state.inputOne);
    } else if (this.state.input.includes("/")) {
      total = (Number(this.state.inputOne) / Number(this.state.inputTwo)) * 100;
    } else {
      console.log("Something is wrong in input 🤬");
      total = Number(this.state.inputOne);
    }
    this.setState({
      inputOne: total.toString(),
      inputTwo: "",
      input: total.toString(),
      valueOne: true,
    });
  };

  dot = (value) => {
    if (this.state.valueOne) {
      this.setState((prevState) => ({ inputOne: prevState.inputOne + value }));
    } else {
      this.setState((prevState) => ({ inputTwo: prevState.inputTwo + value }));
    }
    this.setState({ input: this.state.input + value });
  };

  clear = () => {
    this.setState({ inputOne: "", inputTwo: "", valueOne: true, input: "" });
  };

  remove = () => {
    if (this.state.valueOne) {
      this.setState((prevState) => ({ inputOne: prevState.inputOne.substring(0,prevState.inputOne.length-1) }));
    } else {
      this.setState((prevState) => ({ inputTwo: prevState.inputTwo.substring(0,prevState.inputOne.length-1)  }));
    }
    this.setState({ input: this.state.input.substring(0,this.state.input.length-1) });
  }

  convert = () => {
    let converValue = this.state.inputOne;
    if (this.state.input.includes("-")) {
      converValue = Math.abs(this.state.inputOne).toString();
    } else {
      converValue = "-" + this.state.inputOne;
    }
    this.setState({ inputOne: converValue, input: converValue });
  };

  render() {
    return (
      <div className="App">
        <InputBox value={this.state.input} 
          clear={this.clear}
        />
        <Buttons
          buttonHandler={this.buttonHandler}
          sign={this.sign}
          equal={this.equal}
          remove={this.remove}
          convert={this.convert}
          dot={this.dot}
          percent={this.percent}
        />
      </div>
    );
  }
}

export default App;
