import { httpClient } from '../lib/axios';
import {PATHS} from '../constants/paths';

export function getUserInfo(userName) {
  return httpClient.get(PATHS.USER(userName)).then(function(res) {return res.data})
}