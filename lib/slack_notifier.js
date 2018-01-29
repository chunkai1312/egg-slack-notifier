'use strict';

const assert = require('assert');
const SlackNotifier = require('punwave-slack-notifier');

module.exports = app => {
  app.addSingleton('slackNotifier', createSlackNotifier);
};

function createSlackNotifier(config) {
  assert(config.webhookUri);
  return new SlackNotifier(config.webhookUri);
}
