var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.storage = {};

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  for (var i = this.count; i > 0; i--) {
    this.storage[this.count] = this.storage[this.count - 1];
  }

  this.storage[0] = val;

  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  }

  return this.storage[this.count];
};

queueMethods.size = function() {
  return this.count;
};
