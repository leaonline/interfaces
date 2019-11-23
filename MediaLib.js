export const MediaLib = {
  name: 'mediaLib',
  label: 'mediaLib.title',
  icon: 'images',
  appId: 'content',
  isFilesCollection: true
}

MediaLib.collection = function () {
  throw new Error('not yet implemented')
}

MediaLib.filesCollection = function () {
  throw new Error('not yet implemented')
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
  roles: ['readMediaContent'],
  group: 'content',
  run: function () {
    return MediaLib.collection().find()
  }
}

MediaLib.methods = {}

MediaLib.methods.remove = {
  name: 'mediaLib.methods.remove',
  schema: {
    _id: String
  },
  numRequests: 1,
  timeInterval: 250,
  isPublic: true,
  run: function ({ _id }) {
    return MediaLib.collection().remove(_id)
  }
}
