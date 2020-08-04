//using Adjacency list to be faster for sparser data.
//undirected graph.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];    
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); 
        }         
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
    }
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            while(this.adjacencyList[vertex].length) {
                const adjacenctVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, adjacenctVertex);
            }
            delete this.adjacencyList[vertex];
        }
    }
}

let graph = new Graph();
graph.addVertex("London");
graph.addVertex("Tokyo");
graph.addVertex("Paris");
graph.addVertex("New York");
graph.addEdge("London", "Tokyo");
graph.addEdge("London", "Paris");
graph.addEdge("London", "New York");
graph.addEdge("New York", "Tokyo");
console.log(graph);
graph.removeEdge("London", "Tokyo");
console.log(graph);
graph.removeVertex("Paris");
console.log(graph);
