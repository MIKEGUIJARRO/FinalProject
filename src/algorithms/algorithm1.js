// Grafo dirigido
var Graph = require('./../util/Graph');

var buildOrder = function (projects, dependencies) {
    var graph = new Graph();
    projects.forEach(project => {
        graph.addNode(project);
    });
    dependencies.forEach(dependency => {
        graph.addEdge(dependency[1], dependency[0]);
    });

    //graph.printNodes();

    var answer = [];
    var currNode = graph.findNodeWithNoChildren();
    while (currNode !== undefined) {
        answer.push(currNode);
        graph.removeNode(currNode);
        // Return the first Node with no children
        currNode = graph.findNodeWithNoChildren();
    }
    if (answer.length === projects.length) {
        return answer;
    } else {
        throw Error;
    }
};

module.exports = { buildOrder };