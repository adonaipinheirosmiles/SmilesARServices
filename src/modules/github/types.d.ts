export type GithubUserType = {
  login: string;
};

export type GithubUserReposType = {
  id: number,
  name: string,
  full_name: string,
  private: boolean,
  owner: {
    login: string,
    id: number,
    avatar_url: string,
    url: string,
    html_url: string,
    repos_url: string,
  },
  html_url: string,
  description?: string,
  url: string,
  language: string,
  default_branch: string
}