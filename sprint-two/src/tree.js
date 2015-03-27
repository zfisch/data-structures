var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  if (this.value === target){
    return true;
  } else {
    return _.some(this.children, function(tree){
      return tree.contains(target);
    });
  }
};

  // var result = false;
  // if (this.value === target){
  //   return true;
  // }
  // var helperFunc = function(arr){
  //   _.each(arr, function(item){
  //     if(item.value === target){
  //       result = true;
  //     }
  //     helperFunc(item.children);
  //   });
  // };
  // helperFunc(this.children);
  // return result;


  // return this.value === target || _.some(this.children, function(node){
  //     return node.contains(target);
  //   });


/*
 * Complexity: What is the time complexity of the above functions?
 */
