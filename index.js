/* jshint node:true */
'use strict';

module.exports = {
  name: 'ember-cli-swiper',

  included(app) {
    this._super.included(app);
    
    var importContext;
    if (this.import) {
      importContext = this;
    } else {
      importContext = this._findHostForLegacyEmberCLI();
    }
    
    importContext.import(app.bowerDirectory + '/swiper/dist/css/swiper.min.css');

    if (!process.env.EMBER_CLI_FASTBOOT) {
      importContext.import(app.bowerDirectory + '/swiper/dist/js/swiper.min.js');
    }
  },
  
  // included from https://git.io/v6F7n
  // not needed for ember-cli > 2.7
  _findHostForLegacyEmberCLI: function() {
    var current = this;
    var app;

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    return app;
  }
};
