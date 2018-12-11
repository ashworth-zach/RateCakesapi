var mongoose = require('mongoose');
var Schema=mongoose.Schema;
mongoose.Promise = global.Promise;
var cake = new mongoose.Schema({
    name: {
        type: String,
    },
    url:{
        type:String,
    },
    stars:{
        type:Number,
    },
    _comment: [{type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
    timestamps: true
})
var CommentSchema = new mongoose.Schema({
    content: String,
    _cake: {type: Schema.Types.ObjectId, ref: 'cake' }
}, {
    timestamps: true
});
// var task = 
mongoose.model("Comment", CommentSchema);
mongoose.model('cake',cake);
