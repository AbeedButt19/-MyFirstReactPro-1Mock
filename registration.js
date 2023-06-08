const { readFileSync, writeFileSync } = require("fs");

module.exports = {
  Registration: async (data) => {
    const package = JSON.parse(await readFileSync("./user-data.json"));
    package.push(data);
    let insert = JSON.stringify(package);
    writeFileSync("./user-data.json", insert);
    return {
      code: 0
    };
  }
};
