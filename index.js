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
  }

};
