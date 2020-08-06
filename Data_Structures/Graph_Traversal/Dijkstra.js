class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        //insert to values then bubble up based on priority, with low numbers higher. swapping inserted with parents untill heap requirements met.
        let node = new Node(val, priority);
        this.values.push(node);
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    dequeue() {
        //swap first and last in values and pop to remove and return highest priority value (lowest number).
        const min = this.values[0];
        const end = this.values.pop();
        
        if (this.values.length === 0) return min;
        this.values[0] = end;
        
        //new root bubbles down to correct position.
        let parentIndex = 0;
        const length = this.values.length;
        const node = this.values[0];
        while(true) {
            let leftIndex = (2 * parentIndex) + 1;
            let rightIndex = (2 * parentIndex) + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftIndex < length) {
                leftChild = this.values[leftIndex];
                if (leftChild.priority < node.priority) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex];
                if (
                        (swap === null && rightChild.priority < node.priority) || 
                        (swap !== null && rightChild.priority < leftChild.priority)
                    ) {
                        swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[parentIndex] = this.values[swap];
            this.values[swap] = node;
            parentIndex = swap;
        }
        return min;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];    
    }
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({node: vertex2, weight});
            this.adjacencyList[vertex2].push({node: vertex1, weight}); 
        }         
    }
    //DIJKSTRA:
    dijkstra(start, end) {
        let path = []; //return values.
        const distances = {};
        const previous = {}
        const queue = new PriorityQueue();

        //build initial state.
        for (let vertex in this.adjacencyList) {
            previous[vertex] = null;
            if (vertex === start) {
                distances[vertex] = 0;
                queue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                queue.enqueue(vertex, Infinity);
            }
        }

        //while there is a node unvisited.
        while (queue.values.length) {
            let dequeued = queue.dequeue().val;
            if (dequeued === end){
                //FOUND, build path.
                while (previous[dequeued]) {
                    path.push(dequeued);
                    dequeued = previous[dequeued];
                }
                break;
            }
            if(dequeued || distances[dequeued] !== Infinity) {
                for (let neighbor in this.adjacencyList[dequeued]) {
                    //find neighboring node.
                    let nextNode = this.adjacencyList[dequeued][neighbor];
                    //calculate new distance to neighbor.
                    let distance = distances[dequeued] + nextNode.weight;
                    if (distance < distances[nextNode.node]) {
                        //update new smallest distance to neighbor.
                        distances[nextNode.node] = distance;
                        //update previous for neighbor with current.
                        previous[nextNode.node] = dequeued;
                        //enqueue with updated priority.
                        queue.enqueue(nextNode.node, distance);
                    }
                }
            }
            
        }
        console.log(distances);
        return path.concat("A").reverse();
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.dijkstra("A", "E")); // ["A", "C", "D", "F", "E"].