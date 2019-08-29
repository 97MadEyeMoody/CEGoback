const fs = require('fs');
 
fs.readFile('/home/nithin/sandbox/chargebee-migration/input.json','utf8', (err, contents) => {
    if (err) {
        console.error(err)
        return
      }
    console.log(contents);
});

