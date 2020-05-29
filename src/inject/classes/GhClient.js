import octokit from "../objects/octokit";

export default class GhClient {
  async getPulls(pullRequest) {
    return octokit.pulls.get(pullRequest);
  }

  async getChecks(pullRequest) {
    const pull = await this.getPulls(pullRequest);
    return octokit.request(pull.data.statuses_url);
  }

  async getReview(pullRequest) {
    return octokit.pulls.listReviews(pullRequest);
  }
}
