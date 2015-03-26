var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //get tail node, set node value to value
    var n = list.tail;

    list.tail = Node(value);

    if (n) {
      n.next = list.tail;
    } else {
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    var h = list.head;
    list.head = list.head.next;

    return h.value;
  };

  list.contains = function(target){
    var result = false;

    for (var node = list.head; node; node = node.next) {

      if (node.value === target) {
        result = true;
      }
    }

    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
