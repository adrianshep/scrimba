var fs = require("fs");
var fileContent = "hello";

fs.writeFile("./sample.txt", fileContent, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

// Content of the file -> hello
