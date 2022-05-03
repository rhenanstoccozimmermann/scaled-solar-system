import React from 'react';
import Header from './components/Header';
import Objects from './components/Objects';
import Data from './components/Data';
import './App.css';

class App extends React.Component {
  state = {
    OS: 'Linux',
    width: window.innerWidth,
  }

  componentDidMount = async () => {
    await this.setOS();
    window.addEventListener('resize', this.handleWindowResize);
    this.handleResponsiveness();
  }

  componentDidUpdate = () => {
    this.handleResponsiveness();
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  setOS = () => {
    let name = 'Linux';
    if (navigator.userAgent.indexOf('Win') !== -1) { name = 'Windows'; }
    this.setState({ OS: name });
  }

  handleWindowResize = () => {
    const currentWidth = window.innerWidth;
    this.setState({ width: currentWidth });
  }

  handleResponsiveness = () => {
    const { OS, width } = this.state;
    if (OS === 'Windows' && width > 1200) { document.getElementsByTagName('html')[0].style.fontSize = '14px'; }
    else if (OS === 'Windows' && width > 700) { document.getElementsByTagName('html')[0].style.fontSize = '10.5px'; }
    else if (OS === 'Windows' && width <= 700) { document.getElementsByTagName('html')[0].style.fontSize = '7px'; }
  }

  render() {
    return (
      <>
        <Header />
        <Objects />
        <Data />
      </>
    );
  }
}

export default App;
