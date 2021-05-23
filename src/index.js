const { readTestCase } = require("./util/testCaseHandler");
const { buildOrder } = require("./algorithms/algorithm1");

const runHandler = async () => {
    const testFile = process.argv.slice(2)[0];

    const { projects, dependencies } = await readTestCase(testFile);
    const order = buildOrder(projects, dependencies);
    console.log(order);
}

runHandler();

/* TEST */
/* var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, dependencies)); */