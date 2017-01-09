var express = require('express');
var api =  express.Router();

api.get('/:date', function(req, res){
  res.json({date: new Date(req.params.date * 1000).toDateString()});
});


module.exports = api;

