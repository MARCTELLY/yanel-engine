import React, { Component } from "react";
import TopedNavBar from "./TopedNavBar";
import SidedBar from "./SidedBar";
import "./Navbar.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largeurPage: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount;
  handleResize() {
    this.setState({ largeurPage: window.innerWidth });
  }
  render() {
    const topedNav = <TopedNavBar></TopedNavBar>;
    const sidedNav = <SidedBar></SidedBar>;

    return <div>{this.state.largeurPage <= 800 ? sidedNav : topedNav}</div>;
  }
}

export default NavBar;
