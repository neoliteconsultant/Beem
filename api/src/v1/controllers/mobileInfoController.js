'use strict';
const mncMccData = require('../../../data/mnc_mcc');
// const constants =  require("../../constants/constants");
const HTTP_BAD_REQUEST = 400;

exports.index = function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(mncMccData);
}

exports.getNetwork = function (req, res) {
  res.set('Content-Type', 'application/json');
  let mcc = req.query.mcc;
  let mnc = req.query.mnc;
  let errorMessage = {};
  if (!mcc) {
    errorMessage = {
      success: false,
      message: "Mobile Country Codes (MCC) is required"
    };

    res.status(HTTP_BAD_REQUEST);
    res.send(errorMessage);
  } else if (!mnc) {
    errorMessage = {
      success: false,
      message: "Mobile Network Codes (MNC)"
    };

    res.status(HTTP_BAD_REQUEST);
    res.send(errorMessage);
  } else {

    let results = mncMccData.filter(listItem => {
      return listItem.mcc === mcc && listItem.mnc === mnc;
    });

    res.send(results);
  }
}

exports.getNetworkByCountry = function (req, res) {
  res.set('Content-Type', 'application/json');
  let mcc = req.query.mcc;
  let countryName = req.query.countryName;
  let errorMessage = {};
  if (!mcc && !countryName) {
    errorMessage = {
      success: false,
      message: "Please provide either Mobile Country Codes (MCC) or countryName"
    };

    res.status(HTTP_BAD_REQUEST);
    res.send(errorMessage);
  } else {
    let callBackFn = function (listItem) {
      return listItem.mcc === mcc;
    };
    if (countryName) {
      callBackFn = function (listItem) {
        return listItem.country === countryName;
      };
    }
    let results = mncMccData.filter(callBackFn);

    res.send(results);
  }
} 