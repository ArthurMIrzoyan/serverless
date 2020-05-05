'use strict';
const handlers = require("./handlers.js");
module.exports.simple = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      handlers[event.httpMethod](),
    ),
  };
};
