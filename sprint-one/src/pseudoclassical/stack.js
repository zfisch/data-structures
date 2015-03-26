var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};

};

Stack.prototype.push = function(val){
  this.storage[this.count] = val;
  this.count++;
};

Stack.prototype.pop = function(){
  var result;

  if(this.count > 0){
    this.count--;
    result = this.storage[this.count];
  }
  return result;
};

Stack.prototype.size = function(){
  return this.count;
};
