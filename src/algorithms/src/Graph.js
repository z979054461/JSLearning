// 图
// 基本概念：

// 1. **节点（Vertex）**：是构成图的基本单位。在网络中，节点可以代表城市、计算机、交叉点等。

// 2. **边（Edge）**：边是连接两个节点的线段。在无向图中，边没有方向性；而在有向图中，边有从一个节点指向另一个节点的方向。

// 3. **路径（Path）**：是图中从一个节点到另一个节点的节点序列，其中任意两个连续节点之间都通过边相连。

// 4. **环（Cycle）**：环是一种特殊的路径，起点和终点是同一个节点。

// 5. **连通分量（Connected Component）**：在无向图中，如果两个节点之间存在路径，则它们是连通的。一个图的连通分量是图的最大连通子图。

// 6. **强连通分量（Strongly Connected Component）**：在有向图中，如果每一对节点都是相互可达的，则这些节点形成一个强连通分量。

// 7. **度（Degree）**：无向图中一个节点的度是与之相连的边的数量。有向图中，节点的入度是指向该节点的边的数量，出度是从该节点出发的边的数量。

// 8. **邻接矩阵**：是一个二维数组，其元素表示节点对是否相连。如果两个节点i和j相连，则`A[i][j] = 1`（无权图）或`A[i][j] = w`（加权图中的权重）；否则`A[i][j] = 0`。

// 9. **邻接列表**：是一个数组或列表的集合，数组的每个索引对应一个节点，每个索引处的列表包含该节点的邻居节点。

// ### 图算法：

// 1. **深度优先搜索（DFS）**：
//    深度优先搜索是一种用于遍历或搜索树或图的算法。在执行DFS时，算法从根节点开始，沿着一条路径尽可能深地探索，直到到达一个叶子节点，然后回溯并沿着下一条路径探索，直到访问所有可达节点为止。

// 2. **广度优先搜索（BFS）**：
//    广度优先搜索从图的根节点开始，探索所有邻居节点，然后再逐层移至更远的节点。BFS可以用队列数据结构来辅助实现。

// 3. **Dijkstra的算法**：
//    这个算法解决单源最短路径问题。它使用贪心策略，每次选择距离源点最近的未被访问的节点，更新它们的距离，然后再选择下一个最近的节点，直到达到目标节点或所有节点都被访问。

// 4. **贝尔曼-福特算法**：
//    贝尔曼-福特算法也是用来找到单源最短路径的，但它可以处理带有负权重的边。这个算法通过V-1次迭代每个边来逐步减少到各个节点的最短估计距离，其中V是图中节点的数量。

// 5. **Floyd-Warshall算法**：
//    这个算法用于找到所有节点对之间的最短路径。它是一种动态规划算法，通过考虑图中的所有可能的中间节点，来逐步构建最短路径的完整矩阵。

// 6. **克鲁斯卡尔算法**：
//    克鲁斯卡尔算法是一种贪心算法，用于在加权无向图中找到最小生成树。该算法按照边的权重顺序（从小到大）来选择边，确保不会形成环，直到找到树中包含所有节点。

// 7. **普里姆算法**：
//    普里姆算法也用于寻找最小生成树，它从一个选定的起始节点开始，每次添加连接已经选择的节点和未选择节点中权重最小的边。

// 8. **拓扑排序**：
//    拓扑排序是有向无环图（DAG）的线性排序，它确保每个有向边U→V中，节点U在排序列表中位置在节点V之前。

// 9. **最大流问题**：
//    最大流问题是指，在一个网络中，找到从源点到汇点的最大流量。Ford-Fulkerson方法是一种常用的解决最大流问题的算法。

// 10. **PageRank算法**：
//     PageRank是一种网络分析算法，用于确定网页的相关性和重要性。它是基于链接结构的一种方式，来估计一个页面的重要性，每个页面的重要性由指向它的其他页面的数量和质量共同决定。

// 有关算法的实现通常需要选择合适的数据结构，例如，使用邻接列表来实现DFS和BFS，因为它们可以更有效地迭代节点的邻居，而邻接矩阵适合于实现Floyd-Warshall算法，因为这种表示法可以方便地处理节点对之间的距离。

// 了解这些算法以及它们的应用对于解决实际问题非常重要，例如路由和网络流量优化、社交网络分析、搜索引擎排名以及许多其他领域的问题。

class Dictionary {
  constructor() {
    this.items = {};
  }

  has(key) {
    return key in this.items;
  }

  set(key, value) {
    this.items[key] = value;
  }

  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  values() {
    return Object.values(this.items);
  }

  keys() {
    return Object.keys(this.items);
  }

  getItems() {
    return this.items;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  toString() {
    return Object.keys(this.items)
      .map(key => `${key} -> ${this.items[key]}`)
      .join('\n');
  }

  forEach(callback) {
    Object.keys(this.items).forEach(key => callback(key, this.items[key]));
  }

  isEmpty() {
    return this.size() === 0;
  }
}

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    // 无向图
    // this.adjList.get(w).push(v);
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + ' -> ';
      let neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  }
}

function dfs(graph, start, callback) {
  const stack = [start];
  const visited = new Set();
  let p = null;
  while (stack.length > 0) {
    p = stack.pop();
    if (!visited.has(p)) {
      callback(p);
      visited.add(p);
      for (let i = graph.adjList.get(p).length - 1; i >= 0; i--) {
        if (!visited.has(graph.adjList.get(p)[i])) {
          stack.push(graph.adjList.get(p)[i]);
        }
      }
    }
  }
}

function bfs(graph, start, callback) {
  const queue = [];
  const visited = new Set();
  let p;
  if (start) {
    queue.push(start);
  }
  while (queue.length > 0) {
    p = queue.shift();
    if (!visited.has(p)) {
      callback(p);
      visited.add(p);
      graph.adjList.get(p).forEach(neighbour => {
        if (!visited.has(neighbour)) {
          callback(neighbour);
          visited.add(neighbour);
          const neighbors = graph.adjList.get(neighbour);
          if (neighbors) {
            queue.push(...neighbors);
          }
        }
      });
    }
  }
}

/**
 * 拓扑排序
 * @param {Graph} graph
 */
function topologicalSort(graph) {
  const inDegree = {};
  const queue = [];
  const order = [];

  // 初始化入度
  for (let node of graph.vertices) {
    inDegree[node] = 0;
  }
  for (let node of graph.vertices) {
    for (let neighbour of graph.adjList.get(node)) {
      inDegree[neighbour]++;
    }
  }

  for (let node of graph.vertices) {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);

    for (let neighbour of graph.adjList.get(node)) {
      inDegree[neighbour]--;
      if (inDegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  if (order.length !== graph.vertices.length) {
    throw new Error('has Cycle');
  }

  return order;
}

/**
 * Dijkstra
 */
function minPath(graph, start) {
  const distance = {};
  const unVisited = new Set();
  for (let node of Object.keys(graph)) {
    if (node === start) {
      distance[node] = 0;
    } else {
      distance[node] = graph[start][node] ?? Infinity;
      unVisited.add(node);
    }
  }

  while (unVisited.size > 0) {
    const minDistanceNode = [...unVisited].reduce(
      (acc, item) => (acc && distance[acc] < distance[item] ? acc : item),
      null,
    );
    unVisited.delete(minDistanceNode);

    for (let neighbour in graph[minDistanceNode]) {
      if (unVisited.has(neighbour)) {
        // 比较权重
        const newDistance = distance[minDistanceNode] + graph[minDistanceNode][neighbour];
        if (newDistance < distance[neighbour]) {
          distance[neighbour] = newDistance;
        }
      }
    }
  }

  return distance;
}

/**
 *
 * @param {Array<Array<number>>} graph
 */
function floydWarshall(graph) {
  const dist = [];
  const size = graph.length;

  // 初始化dist
  for (let i = 0; i < size; i++) {
    dist[i] = [];
    for (let j = 0; j < size; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else {
        dist[i][j] = graph[i][j];
      }
    }
  }

  for (let k = 0; k < size; k++) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  //检测负权回路
  for (let i = 0; i < size; i++) {
    if (dist[i][i] < 0) {
      throw new Error("Graph contains a negative-weight cycle");
    }
  }

  return dist;
}

const testGraph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  testGraph.addVertex(myVertices[i]);
}
testGraph.addEdge('A', 'B');
testGraph.addEdge('A', 'C');
testGraph.addEdge('A', 'D');
testGraph.addEdge('C', 'D');
testGraph.addEdge('C', 'G');
testGraph.addEdge('D', 'G');
testGraph.addEdge('D', 'H');
testGraph.addEdge('B', 'E');
testGraph.addEdge('B', 'F');
testGraph.addEdge('E', 'I');
// console.log(testGraph.toString());

// console.log('\ndfs');
// dfs(testGraph, 'A', console.log);

// console.log('\bbfs');
// bfs(testGraph, 'A', console.log);

// const topoRet = topologicalSort(testGraph);
// console.log(topoRet);

// 以邻接表形式表示的加权图
// const graph = {
//   A: { B: 2, C: 4 },
//   B: { A: 2, C: 1, D: 7 },
//   C: { A: 4, B: 1, D: 3, E: 5 },
//   D: { B: 7, C: 3, E: 2 },
//   E: { C: 5, D: 2 },
// };
// console.log(minPath(graph, 'A'));

// const graph = [
//   [0, 3, Infinity, 7],
//   [8, 0, 2, Infinity],
//   [5, Infinity, 0, 1],
//   [2, Infinity, Infinity, 0]
// ];
// console.log(floydWarshall(graph))