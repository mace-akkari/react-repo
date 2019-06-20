async function getReposFor(gitUser) {
  const BASE_URL = "https://api.github.com/users/"
  const response = await fetch(`${BASE_URL}${gitUser}/repos`);
  if (!response.ok) {
    console.error('Error fetching from API');
  }
  try {
   return await response.json();
} catch (e) {
    console.error(e);
  }
}

export async function getRepos(gitUser) {
  return await getReposFor(gitUser);
}