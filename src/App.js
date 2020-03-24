import React, { Component } from "react";
import "./App.css";
import TitlesAndIcons from "./secrtions/TitlesAndIcons";
import AboutSection from "./secrtions/AboutSection";
import SkillSection from "./secrtions/SkillSection";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/Global";

class App extends Component {
  state = {
    navbarOpen: false,
    bgColor:" #004080",
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
  randomColor=()=> {
    var letters = '0123456789ABCDEF';
    var colory = '#';
    for (var i = 0; i < 6; i++ ) {
    colory += letters[Math.floor(Math.random() * 16)];
    }
    console.log("colory",colory);
    this.setState({bgColor: colory});
         
}

  render() {
    return (
      <div className="App" style={{background: this.state.bgColor}}>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
          randomColor={this.randomColor}
        />
        <TitlesAndIcons style={{background: this.state.bgColor}} />
        <AboutSection />
        <SkillSection />
        <GlobalStyle />
        <div style={{background: this.state.bgColor}}>
          <div>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
            >
              Smashicons
            </a>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/flat-icons"
              title="Flat Icons"
            >
              Flat Icons
            </a>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
