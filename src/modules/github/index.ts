import axios from 'axios';

import {errorHandler} from '../../utils/errorHandler';

import {GithubUserReposType, GithubUserType} from './types';

export const githubInstance = axios.create({
  baseURL: 'https://api.github.com',
});

function githubServices() {
  async function getUser(user: string): Promise<GithubUserType> {
    try {
      const githubUser = await githubInstance
        .get<GithubUserType>(`users/${user}`)
        .then(resp => resp.data);
      return githubUser;
    } catch (error: any) {
      throw errorHandler(error);
    }
  }

  async function getUserRepos(user: string): Promise<GithubUserReposType[]> {
    try {
      const githubUserRepos = await githubInstance.get<GithubUserReposType[]>(`users/${user}/repos`)
      .then(resp => resp.data)
      return githubUserRepos;
    } catch (error: any) {
      throw errorHandler(error);
    }
  }

  return {
    getUser,
    getUserRepos
  };
}

export {githubServices};
