var models = require('../models');

exports.createPost = function(req,res){
    var newPost = new models.Blogpost({
        "title": "mah",
        "date": new Date("February 21, 2015"),
        "body_text": "eajkgnkajnergkbaeb"
    });

    newPost.save(afterSaving);

    function afterSaving(err) { // this is a callback
      if(err) {console.log(err); res.send(500); }
      else{
          console.log("all ij well");
      }
      res.redirect('/');
    }

}


