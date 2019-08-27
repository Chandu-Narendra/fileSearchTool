var findInFiles = require('find-in-files');
var recursive = require("recursive-readdir");
const myRegex = /(\\)(?!.*\1)(.*?).ts/i;
const folderPath = 'D:/OPT/sonar/src/app';
const extensionType = ".ts";
var output = [];

recursive(folderPath, function (err, files) {
  let filesList = [];
  files.forEach(item=> myRegex.exec(item) ? filesList.push(myRegex.exec(item)[2]+extensionType) : false)
  filesList.forEach((item,index)=>{
    globalSearch(item)
      .then(res => {
        output.push(res);
        filesList.length -1 == index ? console.log("output",output) : false;
      });
  });
  
});

globalSearch = fileName => {
  return findInFiles.find(fileName, folderPath, extensionType+'$')
  .then(results => {
    let count = 0;
    let resp = { fileName : fileName, count: 0, filesList: [] };
      for (var result in results) {
        count++;
        var res = results[result];
        resp.filesList.push(result)
      }
      resp.count = count;
      return resp;
  });
}
