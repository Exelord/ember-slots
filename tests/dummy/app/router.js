import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('not-found', { path: '/*path' });
  docsRoute(this, function() { /* Your docs routes go here */ });
});

export default Router;
