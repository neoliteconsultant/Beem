
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const url = "https://www.mcc-mnc.com";
const path = require('path');

/**
 * Scrapes mobile network
 * data from https://www.mcc-mnc.com/ 
 * and stores in a JSON file.
 * 
 */
console.log("Processing data from "+url);
exports.scrapeData = function () {
    axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const mncmccTable = $('#mncmccTable tbody > tr');
        console.log(mncmccTable.length);

        const mncMccList = [];

        mncmccTable.each(function () {
          const mcc = $(this).find('td:nth-child(1)').text();
          const mnc= $(this).find('td:nth-child(2)').text();
          const iso = $(this).find('td:nth-child(3)').text();
          const country = $(this).find('td:nth-child(4)').text();
          const countryCode = $(this).find('td:nth-child(5)').text();
          const network = $(this).find('td:nth-child(6)').text();

          mncMccList.push({
            mcc:mcc,
            mnc: mnc,
            iso:iso,
            country:country,
            countryCode:countryCode,
            network:network
          });
        });
        writeData(mncMccList);
        
    })
    .catch(console.error);
}

/**
 * Writes MNC MCC data to a JSON file.
 * @param {array} mncMccList 
 */
const writeData = function(mncMccList){
    let content = JSON.stringify(mncMccList);

    let outputFile = path.join(__dirname, '../output') + "/mnc_mcc.json";
    fs.writeFile(outputFile, content, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log("Done");
        console.log(`JSON data written to ${outputFile}`);
    });

    
}