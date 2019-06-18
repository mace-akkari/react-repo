import React from 'react';
import './RepoList.css';

const getRepo = (repo) => (
    <li className="repoBorder" key={repo.name}>
        <p>{repo.name}</p>
        <p>{repo.owner.avatar_url}</p>
        <p>{repo.description}</p>
        <p>{repo.created_at}</p>
        <p>{repo.updated_at}</p>
        <p>{repo.forks}</p>
        
    </li>
); 

const getList = (repos) => {
    if (repos == null) {
        return "No data available";
    } else if (repos.length === 0) {
        return "Empty repo data"
    } else {
        return repos.map(getRepo)
    }
}
const RepoList = (props) => {
    const { repos } = props;
    return (
        <ul className="repo-list">
            {getList(repos)}
        </ul>
    );
}

export default RepoList;