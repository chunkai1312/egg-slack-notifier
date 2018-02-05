'use strict';

const SlackNotifier = require('punwave-slack-notifier');

module.exports = app => {
  app.addSingleton('slackNotifier', createSlackNotifier);
};

function createSlackNotifier(config) {
  const webhookURL = config.webhookURL;
  const options = Object.assign({}, { attachment: { footer: 'egg-slack-notifier' } }, config.options);
  return new SlackNotifier(webhookURL, options);
}
