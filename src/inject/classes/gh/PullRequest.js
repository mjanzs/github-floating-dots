const GH_URI_REGEX = new RegExp('https?://github\.com/(?<owner>[^/]+)/(?<repo>[^/]+)/pull/(?<pullNumber>\\d+)/?')

export default class PullRequest {

  constructor(owner, repo, pullNumber) {
    this.owner = owner;
    this.repo = repo;
    this.pullNumber = pullNumber;
  }

  static fromGhUri(uri) {
    const matcher = GH_URI_REGEX.exec(uri)
    if (matcher) {
      const { groups: { owner, repo, pullNumber } } = matcher;
      return new PullRequest(owner, repo, pullNumber);
    }
  }

  get octokitRequest() {
    return {
      owner: this.owner,
      repo: this.repo,
      pull_number: this.pullNumber
    }
  }

}
