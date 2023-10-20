'use strict';

const resp = require('./response.json');

const headers = {
  "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
  "Access-Control-Allow-Methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "Access-Control-Allow-Origin": "*"
}

module.exports.hello = async (event) => {

  return {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify(resp)
  };

};
