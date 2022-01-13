const db = require('../models');
const Tutorial  = db.tutorials;

//create object in data base 
exports.create = (req,res) => {
    if(!req.body.title){
        res.status(400).send({message:"Content cannot be changed"});
        return;
    }

    const tutorial = new Tutorial({
        title:req.body.title,
        description: req.body.description,
        published:req.body.published ? req.body.published : false
    });

    tutorial
    .save(tutorial)
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
};

//retrieve all ojects from data base
exports.findAll = (req,res) => {
    const title = req.body.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    tutorial
    .find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        message:
        err.message || "Some error occurred while creating the Tutorial."
    })
    
}
