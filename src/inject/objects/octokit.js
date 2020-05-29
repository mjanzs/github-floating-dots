import Store from "../../store/store";
const { Octokit } = require("@octokit/rest");

const store = new Store('settings', {
  'accessToken': ''
});

export default new Octokit({
  auth: store.get('accessToken')
});
