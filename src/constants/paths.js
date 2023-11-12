export const PATHS = {
  USER: (userName) => `users/${userName}`,
  SEARCH_API: (text,userName, repo) => `search/issues?q=${text}repo:${userName}/${repo}`,
  ISSUE_DETAIL: (nameGit, repoName, id) => `/repos/${nameGit}/${repoName}/issues/${id}`,
}