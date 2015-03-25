var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = {};
  stack.count = 0;
  stack.storage = {};

  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  size: function() {
    return this.count;
  },

  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    var result;

    if (this.count > 0) {
      this.count--;
      result = this.storage[this.count];
    }

    return result;
  }
};


