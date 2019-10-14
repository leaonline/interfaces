export const MediaLib = {
  name: 'mediaLib',
  label: 'mediaLb.title',
  icon: 'images',
  appId: 'content',
  isFilesCollection: true
}

MediaLib.publications = {}

MediaLib.publications.all = {
  name: 'mediaLib.publications.all',
  schema: {},
  projection: {},
  numRequests: 1,
  timeInterval: 500,
  isPublic: true,
  roles: [ 'readMediaContent' ],
  group: 'content'
}