var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.count = 0;
  obj.storage = {};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(val){
    for (var i = this.count; i > 0; i--) {
      this.storage[i] = this.storage[i - 1];
    }

    this.count++;
    this.storage[0] = val;
  },
  dequeue: function(){
    var result;
    if(this.count > 0){
      this.count--;
      result = this.storage[this.count];
    }
    return result;
  },
  size: function(){
    return this.count;
  }
};



