const path = require("path");
const { readFile } = require("./readFile");
const { writeFile } = require("./writeFile");


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

const writeTestCase = async (fileName, data) => {
    try {
        await writeFile(path.join(appDir, "result", fileName), data);
    } catch (e) {
        console.log(e);
    }
    return;
}

module.exports = { readTestCase, writeTestCase }