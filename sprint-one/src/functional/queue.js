var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    for(var i=0; i<size; i++){
      storage[i+1] = storage[i];
    }
    size++;
    storage[0] = value;
  };

  someInstance.dequeue = function(){
    var result;
    if(size > 0){
      size--;
      result = storage[size];
      delete storage[size];
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
