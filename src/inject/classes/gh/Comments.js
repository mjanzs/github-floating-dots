export default class Comments {

  constructor(comments) {
    this.comments = comments;
  }

  static commentsFromGhResponse(commentsResponse) {
    console.log(JSON.stringify(commentsResponse))
    debugger;
    return new Comments(commentsResponse.data.map((item) => new Comment(item)))
  }

  commentsByStatus() {

  }
}
