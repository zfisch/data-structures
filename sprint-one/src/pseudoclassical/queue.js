var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  for (var i = this.count; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }

  this.storage[0] = val;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  }

  return this.storage[this.count];
};

Queue.prototype.size = function() {
  return this.count;
};
