import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count : 0
  };
  /**
   * state는 object이다
   * state 변경시 render 함수를 재호출하기 위해서 setState를 사용해야함
   * setState를 호출할때마다 react는 새로운 state와 함께 render function을 호출함
   */
  add = () => {
    console.log('add');
    // this.setState({count : this.state.count + 1})
    this.setState(current => ({count : current.count + 1}));
  };

  minus = () => {
    console.log('minus');
    this.setState({count : this.state.count - 1})
  };

  render(){
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
