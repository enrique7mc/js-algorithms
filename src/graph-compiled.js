function Vertex(name) {
    this.name = name;
}

Vertex.prototype.toString = function () {
    return `${ this.name } `;
};

function Graph(vertexList) {
    this.vertexList = vertexList;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < vertexList.length; i++) {
        this.adj[i] = [];
    }

    this.marked = new Array(vertexList.length).fill(false);
}

Graph.prototype.addEdge = function (v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
};

Graph.prototype.showGraph = function () {
    for (let i = 0; i < this.vertexList.length; i++) {
        let row = `${ this.vertexList[i] } -> `;
        for (const v of this.adj[i]) {
            let vertex = this.vertexList[v];
            row += `${ vertex.name } `;
        }
        console.log(row);
    }
};

/*Graph.prototype.dfs = function (v) {
    if(!this.adj[v]) return;
    this.marked[v] = true;
    console.log(`Visited: ${this.vertexList[v]}`);
    for(const w of this.adj[v]) {
        if(!this.marked[w]) {
            this.dfs(w);
        }
    }
};*/

Graph.prototype.dfs = function (v) {
    if (!this.adj[v]) return;
    this.marked.fill(false);
    const stack = [v];
    this.marked[v] = true;
    while (stack.length) {
        let vertex = stack.pop();
        console.log(`Visited: ${ this.vertexList[vertex] }`);
        this.marked[vertex] = true;
        for (const w of this.adj[vertex]) {
            if (!this.marked[w]) {
                this.marked[w] = true;
                stack.push(w);
            }
        }
    }
};

Graph.prototype.bfs = function (v) {
    if (!this.adj[v]) return;
    this.marked.fill(false);
    const queue = [v];
    this.marked[v] = true;
    while (queue.length) {
        let vertex = queue.shift();
        console.log(`Visited: ${ this.vertexList[vertex] }`);
        this.marked[vertex] = true;
        for (const w of this.adj[vertex]) {
            if (!this.marked[w]) {
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
};

let vertexList = 'A B C D E F G H'.split(' ').map(name => new Vertex(name));
const graph = new Graph(vertexList);
// console.log(vertexList);
function addEdges() {
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(0, 3);

    graph.addEdge(1, 4);
    graph.addEdge(1, 5);

    graph.addEdge(2, 6);

    graph.addEdge(7, 3);
    graph.addEdge(7, 4);
    graph.addEdge(7, 5);
    graph.addEdge(7, 6);
}
addEdges();
// graph.showGraph();
graph.bfs(0);

//# sourceMappingURL=graph-compiled.js.map