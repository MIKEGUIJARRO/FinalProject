// Grafo dirigido
var Graph = require("./../util/Graph");

var answer = [];

var buildOrder = function (projects, dependencies) {
    var graph = new Graph();
    projects.forEach(project => {
        graph.addNode(project);
    });
    dependencies.forEach(dependency => {
        graph.addEdge(dependency[1], dependency[0]);
    });

    graph.printNodes();
    console.log("--------------------")

    // Return the first Node with no children
    var currNode = graph.findNodeWithNoChildren();
    while (currNode !== undefined) {
        dfs(currNode, graph.nodes);
        graph.removeNode(currNode, false);
        // Return the first Node with no children
        currNode = graph.findNodeWithNoChildren();
    }
    console.log("--------")
    console.log(answer);
}

var dfs = function (startNode, graph) {
    for (const node in graph) {
        if (graph[node][startNode] !== undefined) {
            // The startNode is connected to a child node
            dfs(node, graph);
        }
    }
    if (!answer.includes(startNode)) {
        answer.unshift(startNode);

    }
}

module.exports = { buildOrder };