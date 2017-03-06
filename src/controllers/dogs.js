var mongoose = require('mongoose'),
Dog = mongoose.model('Dog');

exports.findAll = function(req, res){
	console.log('in findall');
  Dog.find({},function(err, results) {
    return res.send(results);
  });
};
exports.import = function(req, res){
	console.log('import called');
  Dog.create(
    { "name": "Max", "breed" : "pit" },
    { "name": "Duke" },
    { "name": "Vito" },
    { "name": "Rocko" }, 
		function (err) {
    	if (err) return console.log(err);
    	return res.send(202);
  	}
	);
};

exports.findById = function(req, res){
  var id = req.params.id;
  Dog.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};

exports.add = function(req, res) {
  Dog.create(req.body, function (err, dog) {
    if (err) return console.log(err);
    return res.send(dog);
  });
}

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Dog.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %s dogs', numberAffected);
      return res.sendStatus(202);
  });
}

exports.delete = function(req, res){
  var id = req.params.id;
  Dog.remove({'_id':id},function(result) {
    return res.send(result);
  });
};
