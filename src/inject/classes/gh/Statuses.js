import Status from './Status';

export default class Statuses {

  constructor(statuses) {
    this.statuses = statuses;
  }

  static statusesFromGhResponse(statusesResponse) {
    const statuses = statusesResponse.data.reduce((statusByName, value) => {
      const list = statusByName[value.context] || [];
      list.push(new Status(value));
      statusByName[value.context] = list;
      return statusByName;
    }, {})
    return new Statuses(statuses);
  }

  currentStatus() {
    return Object.keys(this.statuses)
      .map((key) => this.statuses[key])
      .map(value => value
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
          .shift());
  }

}
