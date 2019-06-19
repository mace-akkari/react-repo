async function getReposFor(gitUser) {
  const BASE_URL = "https://api.github.com/users/"
  const response = await fetch(`${BASE_URL} ${gitUser}/repos`);
  if (!response.ok) {
    console.error('Error fetching from API');
  }
  try {
    const data = await response.json();
    const repo = data.data;
    return repo;

  } catch (e) {
    console.error(e);
  }
}

function getReopsFrom(repo, gitUser, repoList) {
  const gits = repoList
  return gits.map((gitUser) => ({
    gitUser,
    value: repo[gitUser]
  }));
}


export async function getRepos(gitUser, repoList = []) {
  const repo = await getReposFor(gitUser);
  return getReopsFrom(repo, gitUser, repoList);
}