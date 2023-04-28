let fs = require("fs");

function saveToJSON(resultSet) {
  fs.writeFile("result-set.json", JSON.stringify(resultSet), function (err) {
    if (err) throw err;
    console.log("Executed Successfully !");
  });
}

module.exports = {
  saveFile: saveToJSON,
};
