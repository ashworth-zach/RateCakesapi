var mongoose = require('mongoose');
var cake = mongoose.model('cake');
var comment = mongoose.model("Comment");

module.exports={
    index:function(req,res){
        res.render("index");
    },
    get:function (req, res) {
        cake.find({}).populate('_comment').exec(function (err, tasks) {
            if (err) {
                res.json({
                    message: "Error",
                    error: err
                })
            } else {
                res.json({
                    message: "success",
                    data: tasks
                })
    
            }
        })
    },
    getone:function(req,res){
        cake.findOne({_id:req.params.id},function(err,cake){
            console.log(cake);
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.json({
                    message: "Success",
                    data:cake
                });
            }
        })
    },
    create:function(req,res){
        cake.create({name:req.body.name,url:req.body.url,stars:req.body.stars },function(err){
            console.log(req.body);
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.redirect('/');
            }
        })
    },
    comment:function(req,res){
        cake.findOne({_id:req.params.id}, function (err,cake){
            console.log(cake);
            var z = new comment({
                content: req.body.content,
                // in the _message collumn save the ID of the message that this comment is referring to.
                _cake: cake._id
            });
            // save the new comment into the db.
            z.save(function (errorsComment1) {
                //  In the column _comments (which is an array) of this specific message where we are commenting, push the entire z (as an object)
                cake._comment.push(z);
                // Save the newly pushed and updated column in Message Schema
                cake.save(function(error2){
                    if (errorsComment1) {
                        console.log("There was an error inserting the new z into the DB.");
                        res.redirect("/");
                    } else {
                        console.log(req.body);
                        console.log("The new z was inserted into the DB.");
                        res.redirect("/");
                    }
                });
            });
        });
                // Create the new comment.
    },
    update:function(req,res){
        cake.findOne({_id:req.params.id},function(err,x){
            console.log(req.body);
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                x.name=req.body.name;
                x.url=req.body.url;
                x.stars=req.body.stars;
                x.save();
                res.redirect('/');
            }
        })
    },
    delete:function(req,res){
        cake.deleteOne({_id:req.params.id},function(err){
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.json({message:"success"});
            }
        })
    }
}