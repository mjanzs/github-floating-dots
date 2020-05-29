const statusColors = {
  error: '#F44336',
  failure: '#7d1008',
  pending: '#1E92F4',
  success: '#4BB543'
}

// todo configurable
const statusIcons = {
  'build': 'build',
  'commit-check': 'announcement',
  'k8s-descriptors-check': 'cloud',
  'sonarqube': 'insights',
  'test-coverage-plugin': 'flaky'
}

const reviewStatesColors = {
  'APPROVE': '#4e5c4d',
  'CHANGES_REQUESTED': '#7d1008',
  'COMMENTED': '#1E92F4',
  'PENDING': '#777'
}

const reviewStateIcons = {
  'APPROVED': 'verified',
  'CHANGES_REQUESTED': 'thumbs_down',
  'COMMENTED': 'thumbs_up_down',
  'PENDING': 'timelapse'
}

export {
  statusColors,
  statusIcons,
  reviewStatesColors,
  reviewStateIcons
};
