const res = require("express/lib/response");
const db = require("../models");
const Tutorial = db.tutorials;

//create object in data base
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content cannot be changed" });
    return;
  }

  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });

  tutorial
    .save(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

//retrieve all ojects from data base
exports.findAll = (req, res) => {
  const title = req.body.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  tutorial
    .find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

//retieve single object
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Not found Tutorial with id " + id });
      } else res.send(data);
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

//update an object
exports.update = (req,res) => {
    if(!req.body){
        return res.status(400).send({message:"Data to be update cannot be empty"});
    }


const id = req.params.id;

Tutorial.findByIdAndUpdate(id,req.body,{ useFindAndModify: false })
.then(data =>{
    res.send({message:"Tutorial was updated successfully"})
})
.catch(error => {
    res.status(500).send({message:"Error updating Tutorial with id=" + id})
})
}


