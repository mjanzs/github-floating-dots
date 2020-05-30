const colors = {
  red: '#F44336',
  darkRed: '#7d1008',
  blue: '#1E92F4',
  green: '#4BB543',
  gray: '#777'
}

const statusColors = {
  error: colors.red,
  failure: colors.darkRed,
  pending: colors.blue,
  success: colors.green
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
  'APPROVED': colors.green,
  'CHANGES_REQUESTED': colors.darkRed,
  'COMMENTED': colors.blue,
  'PENDING': colors.gray
}

const reviewStateIcons = {
  'APPROVED': 'verified',
  'CHANGES_REQUESTED': 'thumbs_down',
  'COMMENTED': 'thumbs_up_down',
  'PENDING': 'timelapse'
}

export {
  colors,
  statusColors,
  statusIcons,
  reviewStatesColors,
  reviewStateIcons
};
