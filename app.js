var express = require('express');
var app = express();
var port = process.env.PORT;
var api =  require('./routes/api.js');

app.use(express.static('public'));

app.use('/', api);

app.get('/', function(req, res){
   res.send(index.html);
});


 app.listen(port, function(err){
  console.error(err);
 });
  




// {"unix":1450137600,"natural":"December 15, 2015"}
// Date.prototype.toDateString()
// Returns the "date" portion of the Date as a human-readable string.



/*User Story: I can pass a string as a parameter, and it will check to see whether that 
string contains either a unix timestamp or a natural language date (example: January 1, 2016).

User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

tests:
February 29, 2015
October 27 1989
dkfjdkjfkdjf 0
October271989
*/