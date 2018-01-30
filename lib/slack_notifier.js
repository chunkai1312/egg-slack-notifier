'use strict';

const SlackNotifier = require('punwave-slack-notifier');

module.exports = app => {
  app.addSingleton('slackNotifier', createSlackNotifier);
};

function createSlackNotifier(config) {
  return new SlackNotifier(config.webhookUri);
}
