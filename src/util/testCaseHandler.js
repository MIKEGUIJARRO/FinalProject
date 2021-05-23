const path = require("path");
const { readFile } = require("./readFile");

const appDir = path.dirname(require.main.filename);

const readTestCase = async (fileName) => {
    const data = await readFile(path.join(appDir, "testCases", fileName), (data) => {
        const lines = data.split(process.platform == "win32" ? "\r\n" : "\n");
        const projects = lines[0].split(" ");
        const dependencies = [];
        for (let i = 1; i < lines.length; i++) {
            const dependency = lines[i].split(" ");
            dependencies.push(dependency);
        }
        return {
            projects,
            dependencies
        };
    });
    return data;
};

module.exports = { readTestCase }