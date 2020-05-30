export default class Review {

  constructor(rawReview) {
    this.rawReview = rawReview;
  }

  get id() {
    return this.rawReview.id;
  }

  get commitId() {
    return this.rawReview.commit_id;
  }

  get state() {
    return this.rawReview.state;
  }

  get href() {
    return this.rawReview._links.html.href;
  }

  get submittedAt() {
    return this.rawReview.submitted_at;
  }
}
