const slackin = require('slackin')

slackin.default({
  token: 'yourtoken',                             // required
  interval: 1000,
  org: 'alaska-startups.slack.com',                    // required
  path: '/',     // defaults to '/'
  channels: 'general',                // for single channel mode
  silent: false                                   // suppresses warnings
}).listen(3000)