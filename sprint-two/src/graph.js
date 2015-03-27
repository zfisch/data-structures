

var Graph = function(){
  this.obj = {};
};

Graph.prototype.addNode = function(node){
  var newNode = {node: node, edges: []};
  this.obj[node] = newNode;
};

Graph.prototype.contains = function(node){
  return _.contains(this.obj[node], node);
};

Graph.prototype.removeNode = function(node){
  delete this.obj[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.obj[fromNode].edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.obj[fromNode].edges.push(toNode);
  this.obj[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var toIndex = _.indexOf(this.obj[fromNode].edges, toNode);
  var fromIndex = _.indexOf(this.obj[toNode].edges, fromNode);
  this.obj[fromNode].edges.splice(toIndex, 1);
  this.obj[toNode].edges.splice(fromIndex, 1);
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.obj, function(graph){
    cb(graph.node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



