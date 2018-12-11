var home = require('../controllers/home.js');

module.exports = function(app){

	app.get('/cake', function(req, res) {
        home.get(req,res);
    });
    app.get('/cake/:id', function(req, res) {
        home.getone(req,res);
    });
    app.post('/cake', function(req, res) {
        home.create(req,res);
    });
    app.post('/newComment/:id',function(req,res){
        home.comment(req,res);
    })
    app.patch('/cake/:id', function(req, res) {
        home.update(req,res);
    });
    app.delete('/cake/:id', function(req, res) {
        home.delete(req,res);
    });
    app.get("/",function(req,res){
        home.index(req,res);
    })
}