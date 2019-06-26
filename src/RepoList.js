import React from 'react';
import './RepoList.css';

const getRepo = (repo) => (
    <li className="repoBorder" key={repo.name}>
        <ul className="repoList-info" >
            <li className="repo-name">{repo.name}</li>
            <li><img src={repo.owner.avatar_url} alt="react-logo" className="repo-img" /></li>
            <li>{`Language: ${repo.language}`}</li>
            <li>{`Description:${repo.description}`}</li>
            <li>{`Created:${repo.created_at}`}</li>
            <li>{`Last updated:${repo.updated_at}`}</li>
            <li>{`Times forked: ${repo.forks}`}</li>

        </ul>
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