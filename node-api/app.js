const fs = require("fs");
const fileContent = "hello";

fs.writeFile("./sample.txt", fileContent, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

// Content of the file -> hello

const sampleObject = {
    a: 1,
    b: 2,
    c: {
        x: 11,
        y: 22
    }
};

fs.writeFile("./object.json", JSON.stringify(sampleObject), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

// Content of the file -> {"a":1,"b":2,"c":{"x":11,"y":22}}
