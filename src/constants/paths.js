export const PATHS = {
  ISSUE_DETAIL: (nameGit, repoName, id) => `/repos/${nameGit}/${repoName}/issues/${id}`,
  USER: (userName) => `users/${userName}`,
  SEARCH_API: function (text, userName, repo) {
    const queryString = 'q=' + encodeURIComponent(`${text} repo:${userName}/${repo}`);
    return `search/issues?${queryString}`;
  }
}