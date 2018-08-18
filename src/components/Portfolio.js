import React, { Component } from 'react';
import axios from 'axios';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: {
        repos: []
      }
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/sneakycrow/repos').then(res => {
      const repos = Object.values(res.data).sort(
        (repoA, repoB) =>
          new Date(repoB.updated_at) - new Date(repoA.updated_at)
      );
      this.setState(() => ({
        github: {
          repos
        }
      }));
    });
  }

  render() {
    const { github } = this.state; // eslint-disable-line no-unused-vars 
    // TODO: Use this var
    return <p>This will be the portfolio section</p>;
  }
}
export default Portfolio;
