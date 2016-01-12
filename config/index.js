module.exports = {
  service: {
    name: 'melodies',
    synopsis: 'thoughts from soundtrack.io',
    mission: 'thoughts from the soundtrack.io team.',
    icon: 'music'
  },
  config: {
    allowPublicRegistration: false, // let other people register
    characterLimit: false // set to a number, such as 140.
  },
  users: { // users will be created on startup, password logged to console
    'admin': { // admin username will be 'admin', change if you'd like
      roles: ['admin'] // what roles this user will have
    }
  },
  database: {
    name: 'soundtrack'
  },
  services: {
    http: {
      port: 13005
    }
  }
};
