var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var tupVal = this._retrieve(k);

  if(tupVal){

    var bucket = this._storage.get(i);

    bucket.forEach(function(tup){
      if (tup[0] === k) {
        tup[1] = v;
      }
    });

    console.log(bucket);
    this._storage.set(i, bucket);
  } else {
    this._storage.set(i, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  var val = null;

  bucket.forEach(function(tup){
    if (tup[0] === k) {
      val = tup[1];
    }
  });

  return val;


};

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
