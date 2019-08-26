var findInFiles = require('find-in-files');

const testFolder = './fileSearch/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

// findInFiles.find("file3.txt", '.', '.txt$')
//     .then(function (results) {
//         for (var result in results) {
//             var res = results[result];
//             console.log('found "' + res.matches[0] + '" ' + res.count + ' times in "' + result + '"');
//         }
//     });

