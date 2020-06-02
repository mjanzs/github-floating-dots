import octokit from "../objects/octokit";

export default class GhClient {
  async getPulls(pullRequest) {
    return octokit.pulls.get(pullRequest.octokitRequest);
  }

  async getChecks(pullRequest) {
    const pull = await this.getPulls(pullRequest.octokitRequest);
    return octokit.request(pull.data.statuses_url);
  }

  async getReview(pullRequest) {
    return octokit.pulls.listReviews(pullRequest.octokitRequest);
  }

  async approve(pullRequest) {
    return this.submitReview(pullRequest, {
      event: 'APPROVE'
    });
  }

  async requestChanges(pullRequest) {
    return this.submitReview(pullRequest, {
      event: 'REQUEST_CHANGES',
      body: 'Changes required'
    });
  }

  async submitReview(pullRequest, params) {
    return octokit.pulls.createReview({
      ...pullRequest.octokitRequest,
      ...params
    });
  }

  async getCommits(pullRequest) {
    return octokit.pulls.listCommits(pullRequest.octokitRequest);
  }
}
