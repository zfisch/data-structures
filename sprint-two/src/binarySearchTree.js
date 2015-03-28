var BinarySearchTree = function(value){
  var tree = Object.create(bstMethods);

  tree.left = null;
  tree.right = null;
  tree.value = value;

  return tree;
};

var bstMethods = {};

bstMethods.contains = function(val, tree) {
  if(tree === undefined){
    tree = this;
  }

  if(tree === null){
    return false;
  }
  else if(val === tree.value){
    return true;
  }
  else{
    return this.contains(val, tree.left) || this.contains(val, tree.right);
  }
};


//   else if(val < this.value){
//     return this.left.contains(val);
//   }
//   else if(val > this.value){
//     return this.right.contains(val);
//   }
//   else{
//     return false;
//   }
// };

//   var result = false;

//   var helper = function(tree) {
//     if (tree === null) {
//       return;
//     }
//     else if (tree.value === val) {
//       result = true;
//     }
//     else if (val > tree.value) {
//       helper(tree.right);
//     }
//     else if (val < tree.value) {
//       helper(tree.left);
//     }
//   };

//   helper(this);
//   return result;
// };


bstMethods.insert = function(val){
    // if(val === this.value){
    //   return;
    // }
    // else if(val < this.value){
    if(val < this.value){
      if(!this.left){
        this.left = BinarySearchTree(val);
      }
      else{
        this.left.insert(val);
      }
    }
    else{
      if(!this.right){
        this.right = BinarySearchTree(val);
      }
      else{
        this.right.insert(val);
    }
  }
};


bstMethods.depthFirstLog = function(callback) {
  //execute a callback on this.value
  callback(this.value);

  //recurse through all the values in the tree
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
