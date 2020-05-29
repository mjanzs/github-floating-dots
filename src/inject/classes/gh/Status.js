export default class Status {

  constructor(rawStatus) {
    this.rawStatus = rawStatus;
  }

  get name() {
    return this.rawStatus.context;
  }
}
