
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'John Doe',
        bio: 'Software Developer from XYZ',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Developer',
      },
      shows: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <h2>{Person.profession}</h2>
          </div>
        )}
        <p>Component mounted for {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;


