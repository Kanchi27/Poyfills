// forEach takes a callback function as input and executes this callback function with each element of the array.

Array.prototype.forEach = function (callback, context) {
  for (let i = 0; i < this.length; i++) {
    // This is primarily to check if the item
    // exists in the array, 
    if (this.indexOf(this[i]) > -1) {
      callback.call(context, this[i], i, this);
    }
  }
}
