const express = require('express');
const app = express();
var path = require('path');

// app.set('view-engine','ejs');

console.log('start');

app.get('/',  (req, res) => { 
    console.log('get');
//   res.send('Hello World')
    res.sendFile(path.join(__dirname+'/index.html')); 
    // res.send(
    //     `<!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>Document</title>
    //     </head>
    //     <body>
    //         test
    //     </body>
    //     </html>`
    //     );

})

app.listen(3000)