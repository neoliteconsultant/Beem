'use strict';
const mncMccData = require('../../../data/mnc_mcc');

exports.index = function (req, res) {
  res.send(mncMccData);
}

exports.getNetwork = function (req, res) {
  let mcc = req.query.mcc;
  let mnc = req.query.mnc;
  let errorMessage = {};
  if (!mcc) {
    errorMessage = {
      success: false,
      message: "Mobile Country Codes (MCC) is required"
    };

    res.send(errorMessage);
  } else if (!mnc) {
    errorMessage = {
      success: false,
      message: "Mobile Network Codes (MNC)"
    };
    res.send(errorMessage);
  } else {

    let results = mncMccData.filter(listItem => {
      return listItem.mcc === mcc && listItem.mnc === mnc;
    });

    res.send(results);
  }
}

exports.getNetworkByCountry = function (req, res) {
  let mcc = req.query.mcc;
  let countryName = req.query.countryName;
  let errorMessage = {};
  if (!mcc && !countryName) {
    errorMessage = {
      success: false,
      message: "Please provide either Mobile Country Codes (MCC) or countryName"
    };

    res.send(JSON.stringify(errorMessage));
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