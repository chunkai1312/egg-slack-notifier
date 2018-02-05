# egg-slack-notifier

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-slack-notifier.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-slack-notifier
[travis-image]: https://img.shields.io/travis/eggjs/egg-slack-notifier.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-slack-notifier
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-slack-notifier.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-slack-notifier?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-slack-notifier.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-slack-notifier
[snyk-image]: https://snyk.io/test/npm/egg-slack-notifier/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-slack-notifier
[download-image]: https://img.shields.io/npm/dm/egg-slack-notifier.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-slack-notifier

> Slack notifier plugin for egg

## Install

```bash
$ npm i egg-slack-notifier --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.slackNotifier = {
  enable: true,
  package: 'egg-slack-notifier',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.slackNotifier = {
  client: {
    webhookURL: 'WEBHOOK_URI',
    options: {
      channel: '#general',
      username: 'webhookbot',
    },
  },
};
```

## Example

```js
app.slackNotifier.send({ text: 'This is a line of text.\nAnd this is another one.' })
```

see [punwave-slack-notifier](https://github.com/punwave/punwave-slack-notifier) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/chunkai1312/egg-slack-notifier/issues).

## License

[MIT](LICENSE)
