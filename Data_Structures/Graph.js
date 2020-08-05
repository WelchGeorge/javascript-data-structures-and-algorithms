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
    depthFirstSearch(start) {
        let results = [];
        let visited = {};
        const recursiveSearch = ((vertex) => {
            if (!vertex) return null; //base case.
            results.push(vertex);
            visited[vertex] = true;
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    recursiveSearch(neighbor);
                }
            }
        });
        recursiveSearch(start);
        return results;
    }
    iterativeDFS(start) {
        let stack = [start];
        let visited = {};
        let results = [];
        let vertex;

        visited[start] = true;
        while (stack.length) {
            vertex = stack.pop();
            results.push(vertex);
            let adjacencyList = this.adjacencyList[vertex];
            
            adjacencyList.forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
             }); 
            
        }
        return results;
    }
    breadthFirstSearch(start) {
        let queue = [start];
        let results = [];
        let visited = {};
        visited[start] = true;
        while (queue.length) {
            let dequeued = queue.shift();
            results.push(dequeued);
            this.adjacencyList[dequeued].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return results;
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
console.log(graph.depthFirstSearch("London"));
console.log(graph.iterativeDFS("London"));
console.log(graph.breadthFirstSearch("London"));
console.log(graph);
graph.removeEdge("London", "Tokyo");
console.log(graph);
graph.removeVertex("Paris");
console.log(graph);
console.log(graph.depthFirstSearch("London"));
console.log(graph.iterativeDFS("London"));
console.log(graph.breadthFirstSearch("London"));
