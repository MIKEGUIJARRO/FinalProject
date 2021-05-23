const fs = require("fs");

const writeFile = (path, data) => {
    return new Promise((resolve, reject)=> {
        fs.writeFile(path, data, (err)=> {
            if (err) {
                console.error(err);
                reject();
            }
            resolve();
        });

    });
}

module.exports = { writeFile };