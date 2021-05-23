const fs = require("fs");

const readFile = async (path, cb) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            const response = cb(data);
            resolve(response);
        });
    });
};

module.exports = { readFile };