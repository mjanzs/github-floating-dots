export default class Status {

  constructor(rawStatus) {
    this.rawStatus = rawStatus;
  }

  get name() {
    return this.rawStatus.context;
  }

  get state() {
    return this.rawStatus.state;
  }

  get description() {
    return this.rawStatus.description;
  }

  get url() {
    return this.rawStatus.target_url;
  }

  get context() {
    return this.rawStatus.context;
  }

  get createdAt() {
    return this.rawStatus.created_at;
  }
}
