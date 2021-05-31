const { readTestCase, writeTestCase } = require("./util/testCaseHandler");
//const { buildOrder } = require("./algorithms/algorithm1");
const { buildOrder } = require("./algorithms/algorithm2");


const runHandler = async () => {
    const testFile = process.argv.slice(2)[0];

    const { projects, dependencies } = await readTestCase(testFile);
    console.log(projects);
    console.log("-----------------------");
    console.log(dependencies);

    const order = buildOrder(projects, dependencies);
    // console.log(order);
    // await writeTestCase("lastResult.txt", JSON.stringify(order));
}

runHandler();