const { readFileSync } = require("fs");

module.exports = {
  Signin: async () => {
    const package = JSON.parse(await readFileSync("./user-data.json"));
    return package;
  }
};
