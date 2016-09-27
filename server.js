'use strict';

const server = require('http').createServer(require('./app'));
const port = process.env.PORT || 3000;

if(process.env.SYNC) {
  require('./db').syncAndSeed()
    .then(function(){
      console.log('synced and seeded');
    })
    .catch(function(err){
      console.log(err);
    });
}

server.listen(port, function() {
  console.log('Server listening on port ' + port);
});
