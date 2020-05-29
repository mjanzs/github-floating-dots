import Review from './Review';

export default class Reviews {

  constructor(reviews) {
    this.reviews = reviews;
  }

  static reviewsFromGhResponse(reviewsResponse) {
    const reviews = reviewsResponse.data
        .map((item) => new Review(item))
    return new Reviews(reviews)
  }

  currentReview() {
    return this.reviews
        .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
        .shift()
  }

}
