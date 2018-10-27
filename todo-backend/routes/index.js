var express = require('express');
var router = express.Router();
var Task = require("./models/todos");





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos/:id', function(req, res,){
  Task.findById(req.params.id, (err, doc) => {
    if (err) {
        res.send(err);
    }
    res.json(doc);
  });
})

router.get('/todos', function(req, res, next) {
    Task.find({}, (err, docs) => {
      if(err){
          res.send(err);
      }
      res.json(docs);
  });
});

router.post('/todos', function(req, res,){
  let newTask = new Task(req.body);
  newTask.save((err, doc) => {
      if (err) {
          res.send(err);
      }
      res.send(doc);
  });

})

router.delete('/todos/:id', function(req, res,){
  Task.deleteOne({ _id: req.params.id }, (err, doc) => {
    if (err) {
        res.send(err);
    }
    res.json({ message: 'Successfully deleted Task!' });
  });
})
router.put('/todos/:id', function(req, res,){
  Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
    if (err) {
        res.send(err);
    }
    res.json(doc);
  });
})

module.exports = router;
