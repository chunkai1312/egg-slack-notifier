'use strict';

const mock = require('egg-mock');

describe('test/slack-notifier.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/slack-notifier-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, slackNotifier')
      .expect(200);
  });
});
