var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};

  return obj;
};

var stackMethods = {};

stackMethods.pop = function(){
  var result;
  if(this.count > 0){
    this.count--;
    result = this.storage[this.count];
  }
  return result;
};

stackMethods.push = function(val){
  this.storage[this.count] = val;
  this.count++;
};

stackMethods.size = function(){
  return this.count;
};


