const lib = require('./module.js')

const fs = require('fs');
// const txt = fs.readFileSync('demo.txt', "utf-8");
// console.log(txt);

fs.readFile('demo.txt', "utf-8", (err, txt) => {
    console.log(txt);

})


console.log(lib.sum(2, 3), lib.mul(3, 4))