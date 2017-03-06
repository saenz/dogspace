module.exports = function(app){
    var dogs = require('./controllers/dogs');
    app.get('/dogs', dogs.findAll);
    app.get('/dogs/:id', dogs.findById);
		app.get('/import', dogs.import);
    app.post('/dogs', dogs.add);
    app.put('/dogs/:id', dogs.update);
    app.delete('/dogs/:id', dogs.delete);
}
