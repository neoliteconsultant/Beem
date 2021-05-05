'use strict';
module.exports = function (app) {
  var mobileInfo = require('../v1/controllers/mobileInfoController');
  
  app.route('/')
    .get(mobileInfo.index);

  app.route(`/v1/network`)
    .get(mobileInfo.getNetwork);

  app.route('/v1/network/country')
    .get(mobileInfo.getNetworkByCountry);
};