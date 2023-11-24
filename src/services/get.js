import { httpClient } from '../lib/axios';
import {PATHS} from '../constants/paths';

export function getUserInfo(userName) {
  return httpClient.get(PATHS.USER(userName)).then(function(res) {return res.data})
}

export function getRepoIssues(text, userName, repo) {
  return httpClient.get(PATHS.SEARCH_API(text, userName, repo)).then(function(res) {return res.data})
}

export function getIssueDetails(userName, repo, postId) {
  return httpClient.get(PATHS.ISSUE_DETAIL(userName, repo, postId)).then(function(res) {return res.data})
}