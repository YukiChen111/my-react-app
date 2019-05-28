import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import {connect} from 'react-redux';
import {changeColor,requestServer} from './actions/square-actions';
import { directive } from '@babel/types';
// import Axios from 'Axios';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bgColor: 'orange',
    };
  }
  changeColor=()=>{
    this.setState({bgColor:"brown"})
  }
  handleChangeColor = () => {
    const currentColor=this.state.bgColor;
    this.setState({
      bgColor: currentColor === 'red'? 'blue':'yellow'
    }
    )
  }

  handleAsyncAction = () => {
    const { asyncAction } = this.props;
    asyncAction && asyncAction();
  };

  displayStatus = () => {
    const { res } = this.props;

    const { loading, msg, ret } = res;
    if (loading === "init") {
      return "hello";
    } else if (loading === "done") {
      return "success";
    } else if (loading === "failure") {
      return `failed message: ${msg}`;
    } else {
      return "loading";
    }
  };

  render() {
    const {color, changeColor} = this.props;
    return (
      <div className="App">
        {
          [1, 2, 3].map((v) => (
          <Square
            key={v}
            name={v} 
            bgColor={color}
            onChangeColor={changeColor}
           />
          ))
        }
         <button onClick={this.handleAsyncAction}>Async Action</button>
         <div>
           <span>{this.displayStatus()}</span>
         </div>
        {/* <button onClick={()=> {this.setState({bgColor: 'blue'})}} title="change color">Click Me!</button> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    color: state.color.color,
    res: state.request,
  }
}

const mapDispatchToProps=(dispatch) =>{
  return {
    changeColor: color => dispatch(changeColor({ color })),
    asyncAction: () => requestServer()(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
