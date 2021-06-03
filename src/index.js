const { readTestCase, writeTestCase } = require("./util/testCaseHandler");
//const { buildOrder } = require("./algorithms/algorithm1");
const { buildOrder } = require("./algorithms/algorithm2");


const runHandler = async () => {
    const testFile = process.argv.slice(2)[0];

    const { projects, dependencies } = await readTestCase(testFile);

    const { answer: order, counterBasicOper } = buildOrder(projects, dependencies);
    console.log(order);
    console.log("Operaciones basicas: ", counterBasicOper);
    await writeTestCase("lastResult.txt", JSON.stringify(order));
}


const id = "Algoritmo";

// Timer that you can use to keep track of the duration of an operation
console.time(id);
runHandler();
console.timeEnd(id);