var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //if no bucket at index, create bucket
  if (!this._storage.get(i)) {
    this._storage.set(i, []);
  }

  //if bucket contains tuple with key k, remove the tuple
  if (this.retrieve(k)) {
    this.remove(k);
  }

  //push the tuple into the bucket
  this._storage.get(i).push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //loop through the bucket, find the right key, and return the associated value
  var bucket = this._storage.get(i);
  for(var j=0; j<bucket.length; j++){
    if (bucket[j][0] === k){
      return bucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  //get the bucket at the index
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  //loop through the bucket to find key of k
  for(var i=0; i < bucket.length; i++){
    if(bucket[i][0] === k){

      //remove tuple at bucket
      bucket.splice(i, 1);
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
