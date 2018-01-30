'use strict';

const slackNotifier = require('./lib/slack_notifier');

module.exports = app => {
  slackNotifier(app);
};
