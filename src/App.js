import React, { Component } from 'react';
import './App.css';
import RepoList from './RepoList';
import { getRepos } from './repolibrary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      repos: [],
      gitUser: "reactjs",
      error: false

    };
    this.fetchRepos = this.fetchRepos.bind(this);
  }

  async fetchRepos(gitUser) {
    this.setState({
      loaded: false
    });
    const repos = await getRepos(gitUser, this.props.repoList);
    this.setState({
      loaded: true,
      gitUser,
      repos
    });
  }

  async componentDidMount() {
    const { gitUser } = this.state;
    const repos = await getRepos(gitUser, this.props.repoList);
    this.setState({
      loaded: true,
      repos
    });
  }

  componentDidCatch() {
    console.log('error')
    this.setState({ error: true });
  }

  render() {
    const { gitUser, loaded, repos, error } = this.state;
    return (
      <div className="App">
        <h1>GitHub Repo</h1>
        <h2>{`You have chosen to view`}</h2> <span>{`${gitUser}'s repository:`}</span>
        {error ? <h2>ERROR HAS OCCURED</h2> : ""}
        {loaded && !error ? <RepoList repos={repos} /> : "Loading"}
      </div>
    );
  }
}


export default App;
