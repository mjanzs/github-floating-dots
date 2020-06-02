import GhClient from "../classes/GhClient";

const ghClient = new GhClient();

export default async function (pullRequest) {
  const commits = await ghClient.getCommits(pullRequest)
  const messages = commits.data
    .map(value => value.commit.message)
  const hasFixup = messages.some(value => /^fixup!/.test(value))

  if (hasFixup) {
    window.document
      .querySelectorAll('.merge-message .btn-group-rebase, .merge-message .select-menu-button')
      .forEach(element => element.style.backgroundColor = 'red');
    debugger;
  }
}
