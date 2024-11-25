module.exports = function(chai, _) {
  var Test = require('./test');

  chai.passport = chai.passport || {};
  chai.passport.use = function(name, strategy) {
		if (!strategy) {
			strategy = name;
			name = strategy.name;
		}
    return new Test(strategy);
  };
};
