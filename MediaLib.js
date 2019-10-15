export const MediaLib = {
  name: 'mediaLib',
  label: 'mediaLb.title',
  icon: 'images',
  appId: 'content',
  isFilesCollection: true
}

MediaLib.routes = {}

MediaLib.routes.mediaUrl = {
  path: '/media/url',
  methods: ['GET', 'OPTIONS'],
  schema: {
    _id: String
  },
  isPublic: true,
  returns: {
    contentType: 'application/json;UTF-8',
    schema: {
      url: String
    }
  }
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