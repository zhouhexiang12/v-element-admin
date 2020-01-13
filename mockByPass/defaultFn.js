const path = require('path');
const chalk = require('chalk');

module.exports = function(name) {
  return function(req, res) {
    if (req.path.indexOf(name) !== -1) {
      const arrRow = req.path.split('/');
      const arr = arrRow.slice(0, -1);
      const subApiName = arrRow[arrRow.length - 1];
      const pathReso = path.join(process.cwd(), `./mock${arr.join('/')}`); // mock/workflow/workingTable/
      const mockModule = require(pathReso); // // like workingTable
      delete require.cache[require.resolve(pathReso)];
      const result = mockModule(subApiName);
      console.log(chalk.yellow(`${req.path} ---> ${pathReso}`));
      return res.send(result);
    }
  };
};
