const fs = require('fs');
 
let input ;
fs.readFile('/home/nithin/sandbox/chargebee-migration/input.json','utf8', (err, contents) => {
    if (err) {
        console.error(err)
        return
      }
      input = contents;
    
});

